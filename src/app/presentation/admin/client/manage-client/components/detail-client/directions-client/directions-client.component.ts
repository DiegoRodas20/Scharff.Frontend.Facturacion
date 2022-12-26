import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { RegisterDirectionComponent } from './components/register-direction/register-direction.component';
import { UpdateDirectionComponent } from './components/update-direction/update-direction.component';
import { GetAllAddressByClientIdUsecase } from 'src/app/core/usecase/client/address/get-all-address-by-client-id.usecase';
import { ActivatedRoute } from '@angular/router';
import { AddressModel } from 'src/app/core/models/address.model';
import { ResponseData } from 'src/app/core/models/response.model';

@Component({
    selector: 'app-directions-client',
    templateUrl: 'directions-client.component.html',
    styleUrls: ['./directions-client.component.scss'],
    providers: [DialogService]
})

export class DirectionsClientComponent implements OnInit {

    idClient: number
    lAddress: AddressModel[] = []

    constructor(
        private _route: ActivatedRoute,
        public dialogService: DialogService,
        private _getAllDirection: GetAllAddressByClientIdUsecase
    ) {

    }
    ngOnInit() {
        this._route.params.subscribe(params => {
            this.idClient = params['id']
            this.getAllDirections(this.idClient)
        })
    }

    async getAllDirections(idClient: number) {
        try {
            let data: ResponseData<AddressModel[]> = await this._getAllDirection.execute(idClient)
            console.log(data)
            this.lAddress = data.data
        }
        catch (error) {
            console.log(error)
        }
    }

    showModalRegisterDirection() {

        const data = this.idClient
        const ref = this.dialogService.open(RegisterDirectionComponent, {
            data: data,
            header: 'Registrar Dirección',
            width: '40rem',
        });
        ref.onClose.subscribe(() => { this.getAllDirections(this.idClient) })
    }

    showModalUpdateDirection() {
        const ref = this.dialogService.open(UpdateDirectionComponent, {
            header: 'Actualizar Dirección',
            width: '60rem',
        });
    }

}
