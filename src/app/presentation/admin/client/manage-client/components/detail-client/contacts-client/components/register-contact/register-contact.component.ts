import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ContactModel, RegisterContact } from 'src/app/core/models/contact.model';
import { ParamsModel } from 'src/app/core/models/params.models';
import { RegisterContactByClientIdUsecase } from 'src/app/core/usecase/client/contact/register-contact-by-client-id.usecase';
import { GetAllAreaContactUsecase } from 'src/app/core/usecase/utils/get-all-area-contact.usecase';
import { GetAllTypeContactUsecase } from 'src/app/core/usecase/utils/get-all-type-contacts.usecase';


@Component({
    selector: 'app-register-contact-component',
    templateUrl: './register-contact.component.html',
})

export class RegisterContactComponent implements OnInit {

    displayPhone: boolean = false;
    displayEmail: boolean = false;

    formContact: FormGroup;
    idContact: string;

    typeContact: Array<ParamsModel> = [];
    areaContact: Array<ParamsModel> = [];

    constructor(
        private _formBuilder: FormBuilder,
        private _confirmationService: ConfirmationService,
        private _dialogRef: DynamicDialogRef,
        private _config: DynamicDialogConfig,
        private _getAllTypeContact: GetAllTypeContactUsecase,
        private _getAllAreaContact: GetAllAreaContactUsecase,
        private _registerContact: RegisterContactByClientIdUsecase,
        private _messageService: MessageService,
    ) { }

    ngOnInit() {
        this.createFormClient()
        this.getAllTypeContacts()
        this.getAllAreaContacts()
        this.idContact = this._config.data.lastIdContact + 1
    }

    createFormClient() {
        this.formContact = this._formBuilder.group({
            fullName: [null, Validators.required],
            typeContact: [null, Validators.required],
            areaContact: [null, Validators.required],
            phone1: [null],
            phone2: [null],
            email1: [null],
            email2: [null],
            comments: [null]
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

    addPhone() {
        const isDisplayPhone = this.displayPhone
        this.displayPhone = !isDisplayPhone
    }

    addEmail() {
        const isDisplayEmail = this.displayEmail
        this.displayEmail = !isDisplayEmail
    }

    async registerContact() {

        if (this.formContact.invalid) {
            this._messageService.add({
                severity: 'warn',
                summary: 'Atenci??n',
                detail: 'Completar los campos necesarios',
            });
            this.formContact.markAllAsTouched();
            return;
        }

        const form = this.formContact.value

        const contact: RegisterContact = {
            client_id: Number(this._config.data.idClient),
            full_name: form.fullName,
            type_param: form.typeContact.id,
            area_param: form.areaContact.id,
            phones_contact: form.phone2 ? [{ phone: form.phone1 }, { phone: form.phone2 }] : [{ phone: form.phone1 }],
            emails_contact: form.email2 ? [{ email: form.email1 }, { email: form.email2 }] : [{ email: form.email1 }],
            comment: form.comments
        }

        try {
            let data: any = await this._registerContact.execute(contact)

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

    validate(control: string) {
        if (this.formContact.controls[control].touched) {
            if (this.formContact.controls[control].errors) return 'ng-invalid ng-dirty'
            else return 'border-success'
        }
        else return ''
    }
}
