import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AddressModel } from 'src/app/core/models/address.model';
import { ParamsModel } from 'src/app/core/models/params.models';
import { RegisterAddressByClientIdUsecase } from 'src/app/core/usecase/client/address/register-address-by-client-id.usecase';

@Component({
    selector: 'app-register-direction-component',
    templateUrl: './register-direction.component.html',
})

export class RegisterDirectionComponent implements OnInit {

    formDirection: FormGroup;

    typeDirection: Array<ParamsModel> = [];
    unit: Array<ParamsModel> = [];

    constructor(
        private _formBuilder: FormBuilder,
        private _confirmationService: ConfirmationService,
        private _messageService: MessageService,
        private _dialogRef: DynamicDialogRef,
        private _registerAddressByClientId: RegisterAddressByClientIdUsecase,
        private _config: DynamicDialogConfig,

        // private _registerDirection: RegisterDirectionUsecase,
        // private _getAllTypeDirection: GetAllTypeDirectionUsecase
    ) { }

    createFormDirection() {
        this.formDirection = this._formBuilder.group({
            typeDirection: [null, [Validators.required]],
            unit: [null],
            direction: [null, [Validators.required]]
        });
    }

    ngOnInit(): void {
        this.createFormDirection();
        this.typeDirection = [
            {
                id: 1,
                code: '0001',
                description: 'Tipo Direccion 1'
            },
            {
                id: 2,
                code: '0002',
                description: 'Tipo Direccion 2'
            }
        ]

        this.unit = [
            {
                id: 1,
                code: '0001',
                description: 'Almacen'
            },
            {
                id: 2,
                code: '0002',
                description: 'Carga'
            }
        ]
    }

    async createDirection() {
        if (this.formDirection.invalid) {
            this._messageService.add({
                severity: 'warn',
                summary: 'Atención',
                detail: 'Completar los campos necesarios',
            });
            this.formDirection.markAllAsTouched();
            return;
        }

        const form = this.formDirection.value

        const address: AddressModel = {
            idCliente: this._config.data,
            tipoDireccion_parametro: form.typeDirection.id,
            direccion: form.direction
        }

        try {
            let data: any = await this._registerAddressByClientId.execute(address)

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

    validate(control: string) {
        if (this.formDirection.controls[control].touched) {
            if (this.formDirection.controls[control].errors) return 'ng-invalid ng-dirty'
            else return 'border-success'
        }
        else return ''
    }
}
