import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ContactModel } from 'src/app/core/models/contact.model';
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

    addPhone(): void {
        const isDisplayPhone = this.displayPhone
        this.displayPhone = !isDisplayPhone
    }

    addEmail(): void {
        const isDisplayEmail = this.displayEmail
        this.displayEmail = !isDisplayEmail
    }

    async registerContact() {

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

        const contact: ContactModel = {
            idCliente: this._config.data,
            nombreCompleto: form.fullName,
            tipoContacto_parametro: form.typeContact.id,
            areaContacto_parametro: form.areaContact.id,
            comentario: form.comments
        }

        try{
            let data: any = await this._registerContact.execute(contact)

            this._confirmationService.confirm({
                icon: 'pi pi-check-circle',
                message: data.message,
                accept: () => {
                    this.close()
                }
            })
        }
        
        catch(error){
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
