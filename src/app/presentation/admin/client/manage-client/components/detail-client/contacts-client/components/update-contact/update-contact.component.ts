import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ContactModel, RegisterContact, UpdateContact } from 'src/app/core/models/contact.model';
import { ParamsModel } from 'src/app/core/models/params.models';
import { ResponseData } from 'src/app/core/models/response.model';
import { GetContactByIdUsecase } from 'src/app/core/usecase/client/contact/get-contact-by-id.usecase';
import { RegisterContactByClientIdUsecase } from 'src/app/core/usecase/client/contact/register-contact-by-client-id.usecase';
import { UpdateContactByIdUsecase } from 'src/app/core/usecase/client/contact/update-contact-by-id.usecase';
import { GetAllAreaContactUsecase } from 'src/app/core/usecase/utils/get-all-area-contact.usecase';
import { GetAllTypeContactUsecase } from 'src/app/core/usecase/utils/get-all-type-contacts.usecase';

@Component({
    selector: 'app-update-contact-component',
    templateUrl: './update-contact.component.html',
})

export class UpdateContactComponent implements OnInit {

    displayPhone: boolean = false;
    displayEmail: boolean = false;
    phonesContact: any[] = []
    emailsContact: any[] = []

    formContact: FormGroup;
    idContact: number;

    typeContact: Array<ParamsModel> = [];
    areaContact: Array<ParamsModel> = [];
    status = [
        {
            id: true,
            description: 'Activo'
        },
        {
            id: false,
            description: 'Inactivo'
        }
    ];

    constructor(
        private _formBuilder: FormBuilder,
        private _dialogRef: DynamicDialogRef,
        private _getAllTypeContact: GetAllTypeContactUsecase,
        private _config: DynamicDialogConfig,
        private _getAllAreaContact: GetAllAreaContactUsecase,
        private _getContactById: GetContactByIdUsecase,
        private _updateContact: UpdateContactByIdUsecase,
        private _messageService: MessageService,
        private _confirmationService: ConfirmationService
    ) { }

    ngOnInit() {
        this.idContact = this._config.data.idContact

        this.createFormClient()
        this.getAllTypeContacts()
        this.getAllAreaContacts()
        this.getContactById(this.idContact)
    }

    createFormClient() {
        this.formContact = this._formBuilder.group({
            full_name: [null, Validators.required],
            type_param: [null],
            area_param: [null],
            status: [null],
            phone1: [null],
            phone2: [null],
            email1: [null],
            email2: [null],
            comment: [null]
        });
    }

    getAllTypeContacts() {
        this._getAllTypeContact.execute().subscribe((value: ParamsModel) => {
            this.typeContact.push(value)
        })
    }

    getAllAreaContacts() {
        this._getAllAreaContact.execute().subscribe((value: ParamsModel) => {
            this.areaContact.push(value)
        })
    }

    async getContactById(idContact: number) {
        try {
            let data: ResponseData<ContactModel> = await this._getContactById.execute(idContact)

            this.phonesContact = data.data['phones_contact']
            this.emailsContact = data.data['emails_contact']
            this.formContact.patchValue(data.data)

            this.formContact.controls['phone1'].setValue(this.phonesContact[0].telephone)
            this.formContact.controls['email1'].setValue(this.emailsContact[0].email)

            if (data.data['phones_contact'].length > 1) {
                this.addPhone()
                this.formContact.controls['phone2'].setValue(this.phonesContact[1].telephone)
            }

            if (data.data['emails_contact'].length > 1) {
                this.addEmail()
                this.formContact.controls['email2'].setValue(this.emailsContact[1].email)
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    async updateContact() {
        if (this.formContact.invalid) {
            this._messageService.add({
                severity: 'warn',
                summary: 'Atención',
                detail: 'Completar los campos necesarios',
            });
            this.formContact.markAllAsTouched();
            return;
        }

        const form = this.formContact.value

        const contact: UpdateContact = {
            id: Number(this._config.data.idContact),
            full_name: form.full_name,
            type_param: form.type_param,
            area_param: form.area_param,
            phones_contact: form.phone2 ? [{ id: this.phonesContact[0].id, telephone: form.phone1 }, { id: this.phonesContact[1].id, telephone: form.phone2 }] : [{ id: this.phonesContact[0].id, telephone: form.phone1 }],
            emails_contact: form.email2 ? [{ id: this.emailsContact[0].id, email: form.email1 }, { id: this.emailsContact[1].id, email: form.email2 }] : [{ id: this.emailsContact[0].id, email: form.email1 }],
            comment: form.comment
        }

        try {
            let data: any = await this._updateContact.execute(contact)
            console.log(data)

            this._confirmationService.confirm({
                icon: 'pi pi-check-circle',
                message: data.message,
                accept: () => {
                    this.close()
                }
            })
        }

        catch (error) {
            console.log(error)
        }
    }

    close() {
        this._dialogRef.close()
    }

    addPhone() {
        const isDisplayPhone = this.displayPhone
        this.displayPhone = !isDisplayPhone
    }

    addEmail() {
        const isDisplayEmail = this.displayEmail
        this.displayEmail = !isDisplayEmail
    }

}
