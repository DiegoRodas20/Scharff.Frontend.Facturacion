import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DirectionModel } from 'src/app/core/models/direction.model';
import { ParamsModel } from 'src/app/core/models/params.models';
import { RegisterDirectionUsecase } from 'src/app/core/usecase/client/register-direction.usecase';

@Component({
  selector: 'app-register-direction-component',
  templateUrl: './register-direction.component.html',
})
export class RegisterDirectionComponent implements OnInit {

    formDirection: FormGroup;

    // Tipo de dirección
    typeDirection: Array<ParamsModel> = [];

    // Unidad
    unit: Array<ParamsModel> = [];

    constructor(
        private _formBuilder: FormBuilder,
        private _registerDirection: RegisterDirectionUsecase
    ){}

    createFormDirection(){
        this.formDirection = this._formBuilder.group({
            typeDirection: [ null ],
            unit: [null],
            direction: [null]
          });
    }

    ngOnInit(): void {
        this.createFormDirection()
        this.typeDirection = [
            {
                id: 1,
                code: '0001',
                description: 'Dirección Operativa'
            },
            {
                id: 2,
                code: '0002',
                description: 'Dirección Fiscal'
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

    createDirection(){
        if (this.formDirection.invalid) {
            this.formDirection.markAllAsTouched()
            return
          }
      
          const form = this.formDirection.value
      
          const Contact: DirectionModel = {
            typeDirection: form.typeDirection.id,
            unit: form.unit.id,
            direction: form.direction
          }

          this._registerDirection.execute(Contact).subscribe((value: any) => {
            this.formDirection.reset()
          })
    }
}