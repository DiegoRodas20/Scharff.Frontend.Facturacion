import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactModel } from 'src/app/core/models/contact.model';
import { ParamsModel } from 'src/app/core/models/params.models';
import { RegisterContactByClientIdUsecase } from 'src/app/core/usecase/client/contact/register-contact-by-client-id.usecase';
import { GetAllAreaContactUsecase } from 'src/app/core/usecase/utils/get-all-area-contact.usecase';
import { GetAllTypeContactUsecase } from 'src/app/core/usecase/utils/get-all-type-contacts.usecase';


@Component({
  selector: 'app-upedate-contact-component',
  templateUrl: './update-contact.component.html',
})
export class UpdateContactComponent implements OnInit {

  //Añadir Otro telefono
  displayPhone: boolean = false;

  //Añadir Otro Correo
  displayEmail: boolean = false;

  formContact: FormGroup;

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
    private _getAllAreaContact: GetAllAreaContactUsecase,
    private _registerContact: RegisterContactByClientIdUsecase
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
      this.formContact.markAllAsTouched()
      return
    }

    const form = this.formContact.value

    const Contact: ContactModel = {
      nombreCompleto: form.fullName,
      tipoContacto_parametro: form.typeContact.id,
      areaContacto_parametro: form.areaContact.id,
      comentario: form.comments
    }

    // this._registerContact.execute(Contact).subscribe((value: any) => {
    //   this.formContact.reset()
    // })

    this.formContact.reset()
  }
}
