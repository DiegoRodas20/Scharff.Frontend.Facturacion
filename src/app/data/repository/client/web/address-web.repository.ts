import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { ADDRESS_URL } from 'src/app/common/helpers/constants/url.constants';
import { ResponseData } from 'src/app/core/models/response.model';
import { AddressModel } from 'src/app/core/models/address.model';
import { AddressRepository } from 'src/app/core/repositories/address.repository';


@Injectable({
    providedIn: 'root'
})

export class AddressWebRepository extends AddressRepository {

    constructor(
        private http: HttpClient
    ) {
        super();
    }

    // Listado general de direcciones por Cliente
    getAllAddressesByClientId(idClient: number): Promise<ResponseData<AddressModel[]>> {

        const url = `${ADDRESS_URL}/${idClient}`
        return lastValueFrom(this.http.get<ResponseData<AddressModel[]>>(url))
    }

    // Listado de direccion por su id
    getAddressById(idClient: number): Promise<ResponseData<AddressModel>> {

        const url = `${ADDRESS_URL}/${idClient}`
        return lastValueFrom(this.http.get<ResponseData<AddressModel>>(url))
    }

    // Registrar direccion por cliente
    registerAddressByClientId(address: AddressModel): Promise<ResponseData<AddressModel>> {

        const url = `${ADDRESS_URL}`
        return lastValueFrom(this.http.post<ResponseData<AddressModel>>(url, address))
    }

    // Actualizar direccion por cliente
    updateAddressById(idAddress: number, address: AddressModel): Promise<ResponseData<AddressModel>> {

        const url = `${ADDRESS_URL}/${idAddress}`
        return lastValueFrom(this.http.put<ResponseData<AddressModel>>(url, address))
    }

    // Eliminar direccion por cliente
    deleteAddressById(idAddress: number): Promise<ResponseData<AddressModel>> {

        const url = `${ADDRESS_URL}/${idAddress}`
        return lastValueFrom(this.http.delete<ResponseData<AddressModel>>(url))
    }
}
