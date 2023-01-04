import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddressModel } from 'src/app/core/models/address.model';
import { ParamsModel } from 'src/app/core/models/params.models';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { RegisterAddressByClientIdUsecase } from 'src/app/core/usecase/client/address/register-address-by-client-id.usecase';
import { GetAllCountryUsecase } from 'src/app/core/usecase/utils/get-all-country.usecase';
import { GetAllDistrictUsecase } from 'src/app/core/usecase/utils/get-all-district.usecase';
import { GetAllProvincesUsecase } from 'src/app/core/usecase/utils/get-all-province.usecase';
import { GetAllTypeDirectionUsecase } from 'src/app/core/usecase/utils/get-all-typeDirection.usecase';
import { DialogService } from 'primeng/dynamicdialog';
import { UpdateAddressByIdUsecase } from 'src/app/core/usecase/client/address/update-address-by-id.usecase';


@Component({
  selector: 'app-update-direction-component',
  templateUrl: './update-direction.component.html',
  providers: [DialogService]
})
export class UpdateDirectionComponent implements OnInit {

  address: AddressModel

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
    private _updateAddressById: UpdateAddressByIdUsecase,
    private _config: DynamicDialogConfig,
    private _dialogRef: DynamicDialogRef,
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

  async getAllProvinces(){
    this._getAllProvinces.execute().subscribe((value: any) => {
      this.province.push(value)
    })
  }

  async getAllDistricts(){
    this._getAllDistricts.execute().subscribe((value: any) => {
      this.district.push(value)
    })
  }

  async getAllTypeDirections(){
    this._getAllTypeDirections.execute().subscribe((value: any) => {
      this.typeDirection.push(value)
    })
  }

  async getAllCountries(){
    this._getAllCountries.execute().subscribe((value: any) => {
      this.country.push(value)
    })
  }

  async updateDirection() {
    if (this.formDirection.invalid) {
      this.formDirection.markAllAsTouched();
      return;
    }

    const form = this.formDirection.value;

    const address: AddressModel = {
        id: this._config.data,
        postal_code: form.postalCode,
        ubigeo_id: form.ubigeo,
        province_id: form.province?.id,
        district_id: form.district?.id,
        country_id: form.country?.id,
        type_param: form.typeDirection?.id,
        unit_id: form.unit?.id,
        address: form.direction,
        status: form.status?.id
    };


     try {
      let data: any = await this._updateAddressById.execute(address)

      this.close();
    }
    catch (error) {
        console.log(error)
    }

  }

  close() {
      this._dialogRef.close()
  }
}
