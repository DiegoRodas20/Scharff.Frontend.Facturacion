import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { from, Observable } from 'rxjs';
import { flatMap, map } from 'rxjs/operators';
import { ClientModel } from 'src/app/core/models/client.model';
import { ClientRepository } from 'src/app/core/repositories/client.repository';


@Injectable({
    providedIn: 'root'
})
export class ClientWebRepository extends ClientRepository {

    constructor(
        private http: HttpClient
    ) {
        super();
    }

    getAllClients(): Observable<ClientModel> {
        return from([])
    }

    createClient(body: ClientModel): Observable<ClientModel> {
        return this.http
        .get<ClientModel[]>('')
        .pipe(flatMap((item) => item))
    }
}