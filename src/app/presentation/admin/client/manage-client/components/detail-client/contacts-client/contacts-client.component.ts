import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { RegisterContactComponent } from './components/register-contact/register-contact.component'; 
import { UpdateContactComponent } from './components/update-contact/update-contact.component'; 

@Component({
  selector: 'app-contacts-client',
  templateUrl: './contacts-client.component.html',
  providers: [ RegisterContactComponent, UpdateContactComponent ]
})

export class ContactsClientComponent implements OnInit {


  contacts: any = [];

  constructor(
    public dialogService: DialogService
    ){

  }
  ngOnInit() {
    this.contacts = [
      {
        id: 1,
        name: 'Josué CB',
        contactArea: 'Area test',
        contactType: 'Contacto Interno',
        status: 'Activo',
        phone: '987609879',
        email: 'jcaycho@sapia.com.pe',
        comments: 'Contacto de confianza'
      },
      {
        id: 2,
        name: 'Manuel Moyano',
        contactArea: 'Area Ventas',
        contactType: 'Contacto Externo',
        status: 'Activo',
        phone: '987609811',
        email: 'mmoyano@test.com.pe',
        comments: 'Contacto del área de ventas'
      }
    ]
    this.contacts = this.contacts.map((element: any, index: number )=> {
      return { ...element, index: (index + 1) }
    })
  }

  showModalRegisterContact(){
    const ref = this.dialogService.open(RegisterContactComponent, {
      header: 'Registrar Contacto',
      width: '60rem'
  })
  }

  showModalUpdateContact(){
    const ref = this.dialogService.open(UpdateContactComponent, {
      header: 'Actualizar Contacto',
      width: '60rem',
  })
  }

}
