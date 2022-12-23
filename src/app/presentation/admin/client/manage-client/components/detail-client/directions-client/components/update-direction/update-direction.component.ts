import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddressModel } from 'src/app/core/models/address.model';
import { ParamsModel } from 'src/app/core/models/params.models';
import { RegisterAddressByClientIdUsecase } from 'src/app/core/usecase/client/address/register-address-by-client-id.usecase';
import { GetAllCountryUsecase } from 'src/app/core/usecase/utils/get-all-country.usecase';
import { GetAllDistrictUsecase } from 'src/app/core/usecase/utils/get-all-district.usecase';
import { GetAllProvincesUsecase } from 'src/app/core/usecase/utils/get-all-province.usecase';
import { GetAllTypeDirectionUsecase } from 'src/app/core/usecase/utils/get-all-typeDirection.usecase';


@Component({
  selector: 'app-update-direction-component',
  templateUrl: './update-direction.component.html',
})
export class UpdateDirectionComponent implements OnInit {

  formDirection: FormGroup;

  // Tipo de dirección
  typeDirection: Array<ParamsModel> = [];

  // Unidad
  unit: Array<ParamsModel> = [];

  // Provincia
  province: Array<ParamsModel> = [];

  // Distrito
  district: Array<ParamsModel> = [];

  // Pais
  country: Array<ParamsModel> = [];

  // Estado
  status: Array<ParamsModel> = [];

  constructor(
    private _formBuilder: FormBuilder,
    private _getAllProvinces: GetAllProvincesUsecase,
    private _getAllDistricts: GetAllDistrictUsecase,
    private _getAllTypeDirections: GetAllTypeDirectionUsecase,
    private _getAllCountries: GetAllCountryUsecase,
    private _registerDirection: RegisterAddressByClientIdUsecase,
  ) {}

  createFormDirection() {
    this.formDirection = this._formBuilder.group({
      postalCode: [null],
      ubigeo: [null],
      province: [null],
      district: [null],
      country: [null],
      typeDirection: [null],
      unit: [null],
      direction: [null],
      status: [null]
    });
  }

  ngOnInit(): void {
    this.createFormDirection();
    this.getAllProvinces();
    this.getAllDistricts();
    this.getAllTypeDirections();
    this.getAllCountries();
  }

  getAllProvinces(){
    this._getAllProvinces.execute().subscribe((value: any) => {
      this.province.push(value)
    })
  }

  getAllDistricts(){
    this._getAllDistricts.execute().subscribe((value: any) => {
      this.district.push(value)
    })
  }

  getAllTypeDirections(){
    this._getAllTypeDirections.execute().subscribe((value: any) => {
      this.typeDirection.push(value)
    })
  }

  getAllCountries(){
    this._getAllCountries.execute().subscribe((value: any) => {
      this.country.push(value)
    })
  }

  updateDirection() {
    if (this.formDirection.invalid) {
      this.formDirection.markAllAsTouched();
      return;
    }

    const form = this.formDirection.value;

    // const Direction: AddressModel = {
    //   postalCode: form.postalCode,
    //   ubigeo: form.ubigeo,
    //   province: form.province.id,
    //   district: form.district.id,
    //   country: form.country.id,
    //   typeDirection: form.typeDirection.id,
    //   unit: form.unit,
    //   direction: form.direction,
    //   status: form.status
    // };

    // console.log('DATOS DE DIRECCIÓN')
    // console.log(Direction)

  }
}
