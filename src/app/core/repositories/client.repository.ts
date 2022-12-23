import { ClientModel } from '../models/client.model';
import { ResponseData } from '../models/response.model';

export abstract class ClientRepository {

    abstract getAllClients(): Promise<ResponseData<ClientModel>>

    abstract getClientById(idClient: number): Promise<ResponseData<ClientModel>>

    abstract registerClient(client: ClientModel): Promise<ResponseData<ClientModel>>

    abstract updateClient(idClient: number, client: ClientModel): Promise<ResponseData<ClientModel>>

    abstract disableClient(idClient: number): Promise<ResponseData<ClientModel>>

    abstract enableClient(idClient: number): Promise<ResponseData<ClientModel>>

    abstract validateClient(client: ClientModel): Promise<ResponseData<ClientModel>>

}
