import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ClientModel } from 'src/app/core/models/client.model';
import { ResponseData } from 'src/app/core/models/response.model';
import { GetClientByIdUsecase } from 'src/app/core/usecase/client/client/get-client-by-id.usecase';

@Component({
    selector: 'app-detail-client',
    templateUrl: './detail-client.component.html',
    styleUrls: ['./detail-client.component.scss'],
})

export class DetailClientComponent implements OnInit {

    client: ClientModel

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _getClientById: GetClientByIdUsecase,
        private _messageService: MessageService,
    ) { }

    ngOnInit() {
        this._route.params.subscribe(params => {
            this.getClientById(params['id'])
        })
    }

    async getClientById(idClient: number) {
        try {
            let data: ResponseData<ClientModel> = await this._getClientById.execute(idClient)
            console.log(data)
            this.client = data.data
            this._messageService.add(
                {
                    severity: 'success',
                    summary: 'Éxito',
                    detail: data.message
                }
            )
        }
        catch (error) {
            console.log(error)
        }
    }

    manageClient() {
        this._router.navigate(['/admin/client'])
    }
}
