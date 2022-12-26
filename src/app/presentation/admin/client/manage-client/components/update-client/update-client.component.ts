import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ClientModel } from 'src/app/core/models/client.model';
import { ParamsModel } from 'src/app/core/models/params.models';
import { UpdateClientUsecase } from 'src/app/core/usecase/client/client/update-client.usecase';
import { GetAllBusinessGroupUsecase } from 'src/app/core/usecase/utils/get-all-businessGroup.usecase';
import { GetAllCoinsUsecase } from 'src/app/core/usecase/utils/get-all-coins.usecase';
import { GetAllEconomicSectorUsecase } from 'src/app/core/usecase/utils/get-all-economicSector.usecase';
import { GetAllHoldingUsecase } from 'src/app/core/usecase/utils/get-all-holding.usecase';
import { GetAllSegmentationUsecase } from 'src/app/core/usecase/utils/get-all-segmentation.usecase';
import { GetAllTypeDocumentIdentyUsecase } from 'src/app/core/usecase/utils/get-all-typesDocumentIdenty.usecase';

@Component({
    selector: 'app-update-client',
    templateUrl: './update-client.component.html',
})

export class UpdateClientComponent implements OnInit {

    public isUniqueCode: boolean = true;
    formClient: FormGroup;

    // Parametros a consumir
    coins: Array<ParamsModel> = []
    businessGroups: Array<ParamsModel> = []
    economicSector: Array<ParamsModel> = []
    typeDocumentIdenty: Array<ParamsModel> = []
    segmentation: Array<ParamsModel> = []
    holding: Array<ParamsModel> = []

    constructor(
        private _formBuilder: FormBuilder,
        private _messageService: MessageService,
        private _config: DynamicDialogConfig,
        private _confirmationService: ConfirmationService,
        private _dialogRef: DynamicDialogRef,
        private _updateClient: UpdateClientUsecase,
        private _getAllCoins: GetAllCoinsUsecase,
        private _getAllBusinessGroups: GetAllBusinessGroupUsecase,
        private _getAllEconomicSector: GetAllEconomicSectorUsecase,
        private _getAllTypeDocumentIdenty: GetAllTypeDocumentIdentyUsecase,
        private _getAllSegmentation: GetAllSegmentationUsecase,
        private _getAllHolding: GetAllHoldingUsecase,
        private _route: ActivatedRoute,
    ) { }

    ngOnInit() {
        this.createFormClient()
        this.getAllCoins()
        this.getAllBusinessGroup()
        this.getEconomicSector()
        this.getAllTypeDocumentIdenty()
        this.getAllSegmentation()
        this.getAllHolding()

        this.formClient.patchValue(this._config.data)
    }

    createFormClient() {
        this.formClient = this._formBuilder.group({
            id: [null],
            tipoDocumentoIdentidad: [null, Validators.required],
            numeroDocumentoIdentidad: [null, Validators.required],
            razonSocial: [null, Validators.required],
            telefono: [null, Validators.required],
            nombreComercial: [null, Validators.required],
            tipoMoneda_parametro: [null, Validators.required],
            grupoEmpresarial_parametro: [null],
            codigoSector_parametro: [null],
            holding_parametro: [null],
            codigoSegmentacion_parametro: [null],
            comentario: [null]
            // accountAuthorizeFedex: [null],
            // migrateSap: [false],
            // statusClient: [null],
            // accountFedex: [null],
        });
    }

    getAllCoins() {
        this._getAllCoins.execute().subscribe((value: ParamsModel) => {
            this.coins.push(value)
        })
    }

    getAllBusinessGroup() {
        this._getAllBusinessGroups.execute().subscribe((value: ParamsModel) => {
            this.businessGroups.push(value)
        })
    }

    getEconomicSector() {
        this._getAllEconomicSector.execute().subscribe((value: ParamsModel) => {
            this.economicSector.push(value)
        })
    }

    getAllTypeDocumentIdenty() {
        this._getAllTypeDocumentIdenty.execute().subscribe((value: ParamsModel) => {
            this.typeDocumentIdenty.push(value)
        })
    }

    getAllSegmentation() {
        this._getAllSegmentation.execute().subscribe((value: ParamsModel) => {
            this.segmentation.push(value)
        })
    }

    getAllHolding() {
        this._getAllHolding.execute().subscribe((value: ParamsModel) => {
            this.holding.push(value)
        })
    }

    async updateClient() {
        if (this.formClient.invalid) {
            this._messageService.add(
                {
                    severity: 'warn',
                    summary: 'Atención',
                    detail: 'Completar los campos necesarios'
                })
            this.formClient.markAllAsTouched()
            return
        }

        const form = this.formClient.value
        
        const client: ClientModel = {
            id: form.id,
            razonSocial: form.razonSocial,
            tipoDocumentoIdentidad: form.tipoDocumentoIdentidad,
            numeroDocumentoIdentidad: form.numeroDocumentoIdentidad,
            telefono: form.telefono,
            nombreComercial: form.nombreComercial,
            tipoMoneda_parametro: form.tipoMoneda_parametro,
            grupoEmpresarial_parametro: form.grupoEmpresarial_parametro,
            codigoSector_parametro: form.codigoSector_parametro,
            holding_parametro: form.holding_parametro,
            codigoSegmentacion_parametro: form.codigoSegmentacion_parametro,
            comentario: form.comentario,
        }

        try {
            let data: any = await this._updateClient.execute(client)

            this._confirmationService.confirm({
                icon: 'pi pi-check-circle',
                message: data.message,
                accept: () => {
                    this.close()
                }
            })
        }
        catch (error) {
            console.log(error)
        }

    }

    close() {
        this._dialogRef.close()
    }

    showInputSap() {
        return this.formClient.value.migrateSap;
    }
}
