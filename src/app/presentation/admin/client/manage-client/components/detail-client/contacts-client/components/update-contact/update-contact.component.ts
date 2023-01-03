import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ContactModel } from 'src/app/core/models/contact.model';
import { ParamsModel } from 'src/app/core/models/params.models';
import { ResponseData } from 'src/app/core/models/response.model';
import { GetContactByIdUsecase } from 'src/app/core/usecase/client/contact/get-contact-by-id.usecase';
import { RegisterContactByClientIdUsecase } from 'src/app/core/usecase/client/contact/register-contact-by-client-id.usecase';
import { GetAllAreaContactUsecase } from 'src/app/core/usecase/utils/get-all-area-contact.usecase';
import { GetAllTypeContactUsecase } from 'src/app/core/usecase/utils/get-all-type-contacts.usecase';

@Component({
    selector: 'app-update-contact-component',
    templateUrl: './update-contact.component.html',
})

export class UpdateContactComponent implements OnInit {

    displayPhone: boolean = false;
    displayEmail: boolean = false;

    formContact: FormGroup;
    idContact: number;

    typeContact: Array<ParamsModel> = [];
    areaContact: Array<ParamsModel> = [];

    constructor(
        private _formBuilder: FormBuilder,
        private _getAllTypeContact: GetAllTypeContactUsecase,
        private _config: DynamicDialogConfig,
        private _getAllAreaContact: GetAllAreaContactUsecase,
        private _getContactById: GetContactByIdUsecase,
        private _registerContact: RegisterContactByClientIdUsecase,
        private _messageService: MessageService,
    ) { }

    ngOnInit() {
        this.idContact = this._config.data.lastIdContact

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
            this.formContact.patchValue(data.data)
            console.log(data)
        }
        catch (error) {
            console.log(error)
        }
    }

    async updateContact() {

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
