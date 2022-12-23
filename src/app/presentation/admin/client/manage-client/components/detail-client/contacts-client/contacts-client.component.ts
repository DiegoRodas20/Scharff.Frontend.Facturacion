import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { GetAllContactsByClientIdUsecase } from 'src/app/core/usecase/client/contact/get-all-contacts-by-client-id.usecase';
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
    public dialogService: DialogService,
    private _getAllContacts: GetAllContactsByClientIdUsecase
    ){

  }
  ngOnInit() {
    this.getAllContacts()
  }

  getAllContacts(){
    // this._getAllContacts.execute().subscribe((value: any)=>{
    //   this.contacts.push(value)
    //   this.contacts = this.contacts.map((element: any, index: number )=> {
    //     return { ...element, index: (index + 1) }
    //   })
    // })
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
