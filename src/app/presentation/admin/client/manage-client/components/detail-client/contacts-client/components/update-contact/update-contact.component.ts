import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ContactModel } from 'src/app/core/models/contact.model';
import { ParamsModel } from 'src/app/core/models/params.models';
import { RegisterContactByClientIdUsecase } from 'src/app/core/usecase/client/contact/register-contact-by-client-id.usecase';
import { GetAllAreaContactUsecase } from 'src/app/core/usecase/utils/get-all-area-contact.usecase';
import { GetAllTypeContactUsecase } from 'src/app/core/usecase/utils/get-all-type-contacts.usecase';


@Component({
  selector: 'app-update-contact-component',
  templateUrl: './update-contact.component.html',
})
export class UpdateContactComponent implements OnInit {

  //Añadir Otro telefono
  displayPhone: boolean = false;

  //Añadir Otro Correo
  displayEmail: boolean = false;

  formContact: FormGroup;
  idContact: string;

  // Tipo de contacto
  typeContact: Array<ParamsModel> = [];

  // Area de contacto
  areaContact: Array<ParamsModel> = [];

  // Comentarios de cliente
  // areaContact: Array<ParamsModel> = [];

  // Estado de contacto
  // areaContact: Array<ParamsModel> = [];

  constructor(
    private _formBuilder: FormBuilder,
    private _getAllTypeContact: GetAllTypeContactUsecase,
    private _config: DynamicDialogConfig,
    private _getAllAreaContact: GetAllAreaContactUsecase,
    private _registerContact: RegisterContactByClientIdUsecase,
    private _messageService: MessageService,
  ) {}

  createFormClient() {
    this.formContact = this._formBuilder.group({
      fullName: [null, Validators.required],
      typeContact: [null],
      areaContact: [null],
      phone1: [null],
      phone2: [null],
      email1: [null],
      email2: [null],
      comments: [null]
    });
  }

  ngOnInit() {
    this.createFormClient()
    this.getAllTypeContacts()
    this.getAllAreaContacts()
    this.idContact=this._config.data.lastIdContact
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

  addPhone() : void {
    const isDisplayPhone = this.displayPhone
    this.displayPhone = !isDisplayPhone
  }

  addEmail() : void {
    const isDisplayEmail = this.displayEmail
    this.displayEmail = !isDisplayEmail
  }

  createContact() {
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

    const Contact: ContactModel = {
      client_id: this._config.data.client_id,
      full_name: form.fullName,
      type_param: form.typeContact.id,
      area_param: form.areaContact.id,
      comment: form.comments
    }

    // this._registerContact.execute(Contact).subscribe((value: any) => {
    //   this.formContact.reset()
    // })

    this.formContact.reset()
  }
}
