import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { ClientModel } from 'src/app/core/models/client.model';
import { ResponseData } from 'src/app/core/models/response.model';
import { DisableClientUsecase } from 'src/app/core/usecase/client/client/disable-client.usecase';
import { EnableClientUsecase } from 'src/app/core/usecase/client/client/enable-client.usecase';
import { GetAllClientsUsecase } from 'src/app/core/usecase/client/client/get-all-clients.usecase';

import { RegisterClientComponent } from './components/register-client/register-client.component';

@Component({
    selector: 'app-manage-client',
    templateUrl: './manage-client.component.html',
    styleUrls: ['./manage-client.component.scss']
})

export class ManageClientComponent implements OnInit {

    lClients: ClientModel[] = []
    lClientsChunk: ClientModel[] = []
    mensaje: string
    filtro = new FormControl()

    constructor(
        public dialogService: DialogService,
        private _getAllClients: GetAllClientsUsecase,
        private _enableClient: EnableClientUsecase,
        private _disableClient: DisableClientUsecase,
        private _messageService: MessageService,
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

        ref.onClose.subscribe(() => { this.getAllClients() })
    }

    async getAllClients() {
        try {
            const data: any = await this._getAllClients.execute()
            this.lClients = data.data
            this.lClientsChunk = this.lClients.slice(0, 4);
            this.mensaje = data.message
        }
        catch (error) {
            console.log("Error: ", error)
        }
    }

    async disableClient(idClient: number) {
        try {
            const data: ResponseData<number> = await this._disableClient.execute(idClient)

            this._messageService.add(
                {
                    severity: 'success',
                    summary: 'Éxito',
                    detail: data.message,
                    
                }
            )

            this.getAllClients()
        }
        catch (error) {
            console.log("Error: ", error)
        }
    }

    async enableClient(idClient: number) {
        try {
            const data: ResponseData<number> = await this._enableClient.execute(idClient)

            this._messageService.add(
                {
                    severity: 'success',
                    summary: 'Éxito',
                    detail: data.message,
                    
                }
            )

            this.getAllClients()
        }
        catch (error) {
            console.log("Error: ", error)
        }
    }

    getClientById(idClient: number) {
        this._router.navigate(['/admin/client/' + idClient])
    }

    paginate(event: any) {
        this.lClientsChunk = this.lClients.slice(event.first, event.first + event.rows);
    }
}
