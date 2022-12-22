import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactModel } from 'src/app/core/models/contact.model';
import { ParamsModel } from 'src/app/core/models/params.models';
import { GetAllAreaContactUsecase } from 'src/app/core/usecase/client/get-all-area-contact.usecase';
import { GetAllTypeContactUsecase } from 'src/app/core/usecase/client/get-all-type-contacts.usecase';
import { RegisterContactsUsecase } from 'src/app/core/usecase/client/register-contact.usecase';

@Component({
  selector: 'app-register-contact-component',
  templateUrl: './register-contact.component.html',
})
export class RegisterContactComponent implements OnInit {

  //Añadir Otro telefono
  displayPhone: boolean = false;

  //Añadir Otro Correo
  displayEmail: boolean = false;

  formContact: FormGroup;

  // Tipo de contacto
  typeContact: Array<ParamsModel> = [];

  // Area de contacto
  areaContact: Array<ParamsModel> = [];

  constructor(
    private _formBuilder: FormBuilder,
    private _getAllTypeContact: GetAllTypeContactUsecase,
    private _getAllAreaContact: GetAllAreaContactUsecase,
    private _registerContact: RegisterContactsUsecase
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
      fullName: form.fullName,
      typeContact: form.typeContact.id,
      areaContact: form.areaContact.id,
      phone1: form.phone1,
      phone2: form.phone2,
      email1: form.email1,
      email2: form.email2,
      comments: form.comments
    }

    this._registerContact.execute(Contact).subscribe((value: any) => {
      this.formContact.reset()
    })

    this.formContact.reset()
  }
}
