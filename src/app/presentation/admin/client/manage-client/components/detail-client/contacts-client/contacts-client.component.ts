import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DialogService } from 'primeng/dynamicdialog';
import { ContactModel } from 'src/app/core/models/contact.model';
import { ResponseData } from 'src/app/core/models/response.model';
import { GetAllContactsByClientIdUsecase } from 'src/app/core/usecase/client/contact/get-all-contacts-by-client-id.usecase';
import { RegisterContactComponent } from './components/register-contact/register-contact.component';
import { UpdateContactComponent } from './components/update-contact/update-contact.component';

@Component({
    selector: 'app-contacts-client',
    templateUrl: './contacts-client.component.html',
    providers: [RegisterContactComponent, UpdateContactComponent]
})

export class ContactsClientComponent implements OnInit {

    lContacts: ContactModel[] = []
    idClient: number

    constructor(
        public dialogService: DialogService,
        private _route: ActivatedRoute,
        private _getAllContactsByIdClient: GetAllContactsByClientIdUsecase
    ) {

    }
    ngOnInit() {
        this._route.params.subscribe(params => {
            this.idClient = params['id']
            this.getAllContactsByIdClient(this.idClient)
        })
    }

    async getAllContactsByIdClient(idClient: number) {
        try {
            let data: ResponseData<ContactModel[]> = await this._getAllContactsByIdClient.execute(idClient)
            this.lContacts = data.data
        }
        catch (error) {
            console.log(error)
        }
    }

    showModalRegisterContact() {

        const idClient = this.idClient
        const lastIdContact = this.lContacts.slice(-1)[0].id

        const ref = this.dialogService.open(RegisterContactComponent, {
            data: {
              idClient,
              lastIdContact
            },
            header: 'Registrar Contacto',
            width: '60rem'
        })

        ref.onClose.subscribe(() => { this.getAllContactsByIdClient(this.idClient) })
    }

    showModalUpdateContact(contact: ContactModel) {
      const idClient = contact.client_id
      const lastIdContact = contact.id

      const ref = this.dialogService.open(UpdateContactComponent, {
          data: {
            idClient,
            lastIdContact
          },
          header: 'Actualizar Contacto',
          width: '60rem'
      })
        ref.onClose.subscribe(() => { this.getAllContactsByIdClient(this.idClient) })
    }

}
