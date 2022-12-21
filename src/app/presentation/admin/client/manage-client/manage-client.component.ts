import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { ClientModel } from 'src/app/core/models/client.model';
import { GetAllClientsUsecase } from 'src/app/core/usecase/client/get-all-clients.usecase';
import { RegisterClientComponent } from './components/register-client/register-client.component';

@Component({
    selector: 'app-manage-client',
    templateUrl: './manage-client.component.html',
    styleUrls: ['./manage-client.component.scss'],
    providers: [DialogService]
})

export class ManageClientComponent implements OnInit {

    isVisibleDetailClient = false;

    clients:  Array<ClientModel> = []

    constructor(
        public dialogService: DialogService,
        private _getAllClients: GetAllClientsUsecase
    ) { }

    ngOnInit() {
        this.getAllClients()
    }

    showModalClient() {
        const ref = this.dialogService.open(RegisterClientComponent, {
            header: 'Registrar Cliente',
            width: '75rem',
        });
    }

    getAllClients() {
        this._getAllClients.execute().subscribe((value: ClientModel) => {
            this.clients.push(value)
        })
    }

  //   getClientById() {
  //     this._getClientById.execute().subscribe((value: ClientModel) => {
  //         this.getClientById.push(value)
  //     })
  // }

    showDetailClient(): void {
        this.isVisibleDetailClient = true;
    }

    showSearchClient() {
        this.isVisibleDetailClient = false;
    }
}
