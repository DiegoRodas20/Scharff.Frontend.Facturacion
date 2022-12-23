import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { ClientModel } from 'src/app/core/models/client.model';
import { ClientRepository } from 'src/app/core/repositories/client.repository';
import { CLIENT_URL } from 'src/app/common/helpers/constants/url.constants';
import { ResponseData } from 'src/app/core/models/response.model';


@Injectable({
    providedIn: 'root'
})

export class ClientWebRepository extends ClientRepository {

    constructor(
        private http: HttpClient
    ) {
        super();
    }

    // Listado general de Clientes
    getAllClients(): Promise<ResponseData<ClientModel>> {

        const url = `${CLIENT_URL}`
        return lastValueFrom(this.http.get<ResponseData<ClientModel>>(url))
    }

    // Informacion de Cliente por ID
    getClientById(idClient: number): Promise<ResponseData<ClientModel>> {

        const url = `${CLIENT_URL}/${idClient}`
        return lastValueFrom(this.http.get<ResponseData<ClientModel>>(url))
    }

    // Registro de Cliente
    registerClient(client: ClientModel): Promise<ResponseData<ClientModel>> {

        const url = `${CLIENT_URL}`
        return lastValueFrom(this.http.post<ResponseData<ClientModel>>(url, client))
    }

    // Actualizacion de Cliente
    updateClient(idClient: number, client: ClientModel): Promise<ResponseData<ClientModel>> {

        const url = `${CLIENT_URL}/${idClient}`
        return lastValueFrom(this.http.put<ResponseData<ClientModel>>(url, client))
    }

    // Inhabilitar Cliente
    disableClient(idClient: number): Promise<ResponseData<ClientModel>> {

        const url = `${CLIENT_URL}/disable/${idClient}`
        return lastValueFrom(this.http.put<ResponseData<ClientModel>>(url, null))
    }

    // Habilitar Cliente
    enableClient(idClient: number): Promise<ResponseData<ClientModel>> {

        const url = `${CLIENT_URL}/enable/${idClient}`
        return lastValueFrom(this.http.put<ResponseData<ClientModel>>(url, null))
    }

    // Validar Cliente
    validateClient(client: ClientModel): Promise<ResponseData<ClientModel>> {

        const url = `${CLIENT_URL}/validate`
        return lastValueFrom(this.http.post<ResponseData<ClientModel>>(url, client))
    }
}
