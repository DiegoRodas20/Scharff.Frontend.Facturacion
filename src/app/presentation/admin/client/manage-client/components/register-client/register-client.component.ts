import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ParamsModel } from 'src/app/core/models/params.models';
import { ClientModel } from 'src/app/core/models/client.model';
import { RegisterClientUsecase } from 'src/app/core/usecase/client/client/register-client.usecase';
import { GetAllCoinsUsecase } from 'src/app/core/usecase/utils/get-all-coins.usecase';
import { GetAllBusinessGroupUsecase } from 'src/app/core/usecase/utils/get-all-businessGroup.usecase';
import { GetAllEconomicSectorUsecase } from 'src/app/core/usecase/utils/get-all-economicSector.usecase';
import { GetAllTypeDocumentIdentyUsecase } from 'src/app/core/usecase/utils/get-all-typesDocumentIdenty.usecase';
import { GetAllSegmentationUsecase } from 'src/app/core/usecase/utils/get-all-segmentation.usecase';
import { GetAllHoldingUsecase } from 'src/app/core/usecase/utils/get-all-holding.usecase';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
    selector: 'app-register-client',
    templateUrl: './register-client.component.html',
})

export class RegisterClientComponent implements OnInit {

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
        private _confirmationService: ConfirmationService,
        private _dialogRef: DynamicDialogRef,
        private _registerClient: RegisterClientUsecase,
        private _getAllCoins: GetAllCoinsUsecase,
        private _getAllBusinessGroups: GetAllBusinessGroupUsecase,
        private _getAllEconomicSector: GetAllEconomicSectorUsecase,
        private _getAllTypeDocumentIdenty: GetAllTypeDocumentIdentyUsecase,
        private _getAllSegmentation: GetAllSegmentationUsecase,
        private _getAllHolding: GetAllHoldingUsecase
    ) { }

    ngOnInit() {
        this.createFormClient()
        this.getAllCoins()
        this.getAllBusinessGroup()
        this.getEconomicSector()
        this.getAllTypeDocumentIdenty()
        this.getAllSegmentation()
        this.getAllHolding()
    }

    createFormClient() {
        this.formClient = this._formBuilder.group({
            typeDocumentIdentity: [null, Validators.required],
            numberDocumentIdentity: [null, Validators.required],
            companyName: [null, Validators.required],
            phone: [null, Validators.required],
            tradeName: [null, Validators.required],
            typeCurrency: [null, Validators.required],
            businessGroup: [null],
            codeEconomicSector: [null],
            holding: [null],
            codeSegmentation: [null],
            accountAuthorizeFedex: [null],
            migrateSap: [false],
            statusClient: [null],
            accountFedex: [null],
        })
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

    async registerClient() {

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
            razonSocial: form.companyName,
            tipoDocumentoIdentidad: form.typeDocumentIdentity.id,
            numeroDocumentoIdentidad: form.numberDocumentIdentity,
            telefono: form.phone,
            nombreComercial: form.tradeName,
            tipoMoneda_parametro: form.typeCurrency.id,
            grupoEmpresarial_parametro: form.businessGroup.id,
            codigoSector_parametro: form.codeEconomicSector.id,
            holding_parametro: form.holding.id,
            codigoSegmentacion_parametro: form.codeSegmentation.id,
            cuentaAutorizadaFedex: form.accountAuthorizeFedex,
            estadoCliente: form.statusClient,
            cuentaFedex: form.accountFedex
        }

        try {
            let data: any = await this._registerClient.execute(client)
            console.log(data)
            this._confirmationService.confirm({
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

    showInputSap() {
        return this.formClient.value.migrateSap;
    }

    close() {
        this._dialogRef.close()
    }

    validate(control: string) {
        if (this.formClient.controls[control].touched) {
            if (this.formClient.controls[control].errors) return 'ng-invalid ng-dirty'
            else return 'border-success'
        }
        else return ''
    }
}
