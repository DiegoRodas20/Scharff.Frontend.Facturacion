import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DialogService } from 'primeng/dynamicdialog';
import { ClientModel } from 'src/app/core/models/client.model';
import { ResponseData } from 'src/app/core/models/response.model';
import { GetClientByIdUsecase } from 'src/app/core/usecase/client/client/get-client-by-id.usecase';
import { UpdateClientComponent } from '../../update-client/update-client.component';

@Component({
    selector: 'app-information-client',
    templateUrl: './information-client.component.html',
    styleUrls: ['./information-client.component.scss'],
})

export class InformationClientComponent implements OnInit {

    isVisibleAdditionalData = false;
    isClientChecked = true;

    client: ClientModel
    idClient: number

    constructor(
        public dialogService: DialogService,
        private _route: ActivatedRoute,
        private _getClientById: GetClientByIdUsecase,
    ) { }

    ngOnInit() {
        this._route.params.subscribe(params => {
            this.idClient = params['id']
            this.getClientById(this.idClient)
        })
    }

    async getClientById(idClient: number) {

        try {
            let data: ResponseData<ClientModel> = await this._getClientById.execute(idClient)
            console.log(data)
            this.client = data.data
        }
        catch (error) {
            console.log(error)
        }

    }

    showModalUpdateClient() {

        const data = this.client

        const ref = this.dialogService.open(UpdateClientComponent, {
            data: data,
            header: 'Actualizar Cliente',
            width: '75rem',
        });

        ref.onClose.subscribe(() => { this.getClientById(this.idClient) })
    }

    toggleAdditionalData() {
        this.isVisibleAdditionalData = !this.isVisibleAdditionalData;
    }
}
