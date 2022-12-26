import { AddressModel } from '../models/address.model';
import { ResponseData } from '../models/response.model';

export abstract class AddressRepository {

    abstract getAllAddressesByClientId(idClient: number): Promise<ResponseData<AddressModel[]>>

    abstract getAddressById(idClient: number): Promise<ResponseData<AddressModel>>

    abstract registerAddressByClientId(address: AddressModel): Promise<ResponseData<AddressModel>>

    abstract updateAddressById(idAddress: number, address: AddressModel): Promise<ResponseData<AddressModel>>

    abstract deleteAddressById(idAddress: number): Promise<ResponseData<AddressModel>>

}
