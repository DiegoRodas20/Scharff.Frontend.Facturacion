import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegisterClientsUsecase } from 'src/app/core/usecase/client/register-clients.usecase';
import { GetAllCoinsUsecase } from 'src/app/core/usecase/client/get-all-coins.usecase';
import { ParamsModel } from 'src/app/core/models/params.models';
import { GetAllBusinessGroupUsecase } from 'src/app/core/usecase/client/get-all-businessGroup.usecase';
import { GetAllEconomicSectorUsecase } from 'src/app/core/usecase/client/get-all-economicSector.usecase';
import { GetAllTypeDocumentIdentyUsecase } from 'src/app/core/usecase/client/get-all-typesDocumentIdenty.usecase';
import { GetAllSegmentationUsecase } from 'src/app/core/usecase/client/get-all-segmentation.usecase';
import { ClientModel } from 'src/app/core/models/client.model';
import { GetAllHoldingUsecase } from 'src/app/core/usecase/client/get-all-holding.usecase';

@Component({
    selector: 'app-register-client',
    templateUrl: './register-client.component.html',
})

export class RegisterClientComponent implements OnInit {

    formClient: FormGroup;

    // Monedas
    coins:  Array<ParamsModel> = []

    // Grupo Empresarial
    businessGroups:  Array<ParamsModel> = []

    // Sector Económico
    economicSector: Array<ParamsModel> = []

    // Tipo Documento Identidad
    typeDocumentIdenty: Array<ParamsModel> = []

    // Segmentación
    segmentation: Array<ParamsModel> = []

    // Holding
    holding: Array<ParamsModel> = []

    constructor(
        private _formBuilder: FormBuilder,
        private _createClient: RegisterClientsUsecase,
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

    getAllBusinessGroup(){
        this._getAllBusinessGroups.execute().subscribe((value: ParamsModel) => {
            this.businessGroups.push(value)
        })
    }

    getEconomicSector(){
        this._getAllEconomicSector.execute().subscribe((value: ParamsModel) => {
            this.economicSector.push(value)
        })
    }

    getAllTypeDocumentIdenty(){
        this._getAllTypeDocumentIdenty.execute().subscribe((value: ParamsModel) => {
            this.typeDocumentIdenty.push(value)
        })
    }

    getAllSegmentation(){
        this._getAllSegmentation.execute().subscribe((value: ParamsModel) => {
            this.segmentation.push(value)
        })
    }

    getAllHolding(){
        this._getAllHolding.execute().subscribe((value: ParamsModel) => {
            this.holding.push(value)
        })
    }

    registerClient() {

        if (this.formClient.invalid) {
            this.formClient.markAllAsTouched()
            return
        }

        const form = this.formClient.value
        
        const Client:  ClientModel = {
            companyName: form.companyName,
            typeDocumentIdentity: form.typeDocumentIdentity.id,
            numberDocumentIdentity: form.numberDocumentIdentity,
            phone: form.phone,
            tradeName: form.tradeName,
            typeCurrency: form.typeCurrency.id,
            businessGroup: form.businessGroup.id,
            codeEconomicSector: form.codeEconomicSector.id,
            holding: form.holding.id,
            codeSegmentation: form.codeSegmentation.id,
            accountAuthorizeFedex: form.accountAuthorizeFedex,
            migrateSap: form.migrateSap,
            statusClient: form.statusClient,
            accountFedex: form.accountFedex,    
        }

        console.log('DATOS DE CLIENTE')
        console.log(Client)
        this._createClient.execute(Client).subscribe((value: any) => {
          this.formClient.reset()
        })
        
    }

    showInputSap() {
        return this.formClient.value.migrateSap;
    }
}
