import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { from, Observable } from 'rxjs';
import { flatMap, map } from 'rxjs/operators';
import { ClientModel } from 'src/app/core/models/client.model';
import { ClientRepository } from 'src/app/core/repositories/client.repository';

import { CLIENT_URL } from 'src/app/common/helpers/constants/url.constants';


@Injectable({
    providedIn: 'root'
})
export class ClientWebRepository extends ClientRepository {

    constructor(
        private http: HttpClient
    ) {
        super();
    }

    clients: ClientModel[] = [
        {
            codigoUnico: '00442',
            ruc: '20500624972',
            razonSocial: 'Las Torres del cruzero'
        },
        {
            codigoUnico: '00442',
            ruc: '20500624972',
            razonSocial: 'Las Torres del cruzero'
        },
        {
            codigoUnico: '00442',
            ruc: '20500624972',
            razonSocial: 'Las Torres del cruzero'
        },
        {
            codigoUnico: '00442',
            ruc: '20500624972',
            razonSocial: 'Las Torres del cruzero'
        },
        {
            codigoUnico: '00442',
            ruc: '20500624972',
            razonSocial: 'Las Torres del cruzero'
        },
    ];

    getAllClients(): Promise<ClientModel[]> {
        return Promise.resolve(this.clients)
    }

    createClient(body: any): Observable<ClientModel> {
        return this.http
        .post<any>(CLIENT_URL, body)
    }

    getClientById(): Observable<ClientModel> {
      throw new Error('Method not implemented.');
    }
}
