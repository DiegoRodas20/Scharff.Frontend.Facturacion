import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ParamsModel } from 'src/app/core/models/params.models';


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
        // private _registerDirection: RegisterDirectionUsecase,
        // private _getAllTypeDirection: GetAllTypeDirectionUsecase
    ){}

    createFormDirection(){
        this.formDirection = this._formBuilder.group({
            typeDirection: [ null ],
            unit: [null],
            direction: [null]
          });
    }

    ngOnInit(): void {
        this.createFormDirection();
        this.getAllTypeDirections();
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

    getAllTypeDirections(){
        // this._getAllTypeDirection.execute().subscribe((value: any) => {
        //   this.typeDirection.push(value)
        // })
      }

    createDirection(){
        if (this.formDirection.invalid) {
            this.formDirection.markAllAsTouched()
            return
          }
      
          const form = this.formDirection.value
      
          // const Contact: DirectionModel = {
          //   typeDirection: form.typeDirection.id,
          //   unit: form.unit.id,
          //   direction: form.direction
          // }

          // this._registerDirection.execute(Contact).subscribe((value: any) => {
          //   this.formDirection.reset()
          // })
    }
}