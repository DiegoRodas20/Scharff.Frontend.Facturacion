import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService } from 'primeng/dynamicdialog';
import { ClientModel } from 'src/app/core/models/client.model';
import { GetAllClientsUsecase } from 'src/app/core/usecase/client/get-all-clients.usecase';
import { RegisterClientComponent } from './components/register-client/register-client.component';

@Component({
    selector: 'app-manage-client',
    templateUrl: './manage-client.component.html',
    styleUrls: ['./manage-client.component.scss']
})

export class ManageClientComponent implements OnInit {

    lClients: ClientModel[] = []

    constructor(
        public dialogService: DialogService,
        private _getAllClients: GetAllClientsUsecase,
        private _router: Router,
    ) { }

    ngOnInit() {
        this.getAllClients()
    }

    registerClient() {
        const ref = this.dialogService.open(RegisterClientComponent, {
            header: 'Registrar Cliente',
            width: '75rem',
        });
    }

    async getAllClients() {
        try {

            const data: any = await this._getAllClients.execute()
            this.lClients = data
        }
        catch (error) {
            console.log("Error: ", error)
        }
    }

    getClientById() {
        this._router.navigate(['/admin/client/id'])
    }

    //   getClientById() {
    //     this._getClientById.execute().subscribe((value: ClientModel) => {
    //         this.getClientById.push(value)
    //     })
    // }
}
