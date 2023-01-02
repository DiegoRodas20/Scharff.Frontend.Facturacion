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
import { VerifyIdentityClientUsecase } from 'src/app/core/usecase/utils/verify-identity-client.usecase';
import { ResponseData } from 'src/app/core/models/response.model';

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
        private _getAllHolding: GetAllHoldingUsecase,
        private _verifyIdentityClient: VerifyIdentityClientUsecase
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
            comment: [null],
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
            business_name: form.companyName,
            document_type_id: form.typeDocumentIdentity.id,
            identity_document_number: form.numberDocumentIdentity,
            telephone: form.phone,
            commercial_name: form.tradeName,
            currency_type: form.typeCurrency.id,
            corporate_group_param: form.businessGroup.id,
            industry_code_param: form.codeEconomicSector.id,
            holding_param: form.holding.id,
            segmentation_code_param: form.codeSegmentation.id,
            comment: form.comment,

            // cuentaAutorizadaFedex: form.accountAuthorizeFedex,
            // estadoCliente: form.statusClient,
            // cuentaFedex: form.accountFedex
        }

        try {
            let data: any = await this._registerClient.execute(client)

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

    async verifyIdentityClient() {

        if (this.formClient.controls['numberDocumentIdentity'].invalid) {
            this._messageService.add(
                {
                    severity: 'warn',
                    summary: 'Atención',
                    detail: 'Verificar el número de documento'
                })
            this.formClient.controls['numberDocumentIdentity'].markAsTouched()
            return
        }

        const numberDocumentIdentity = this.formClient.controls['numberDocumentIdentity'].value

        try {
            // let data: ResponseData<ClientModel> = await this._verifyIdentifyClient.execute(numberDocumentIdentity)
            // console.log(data)
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
