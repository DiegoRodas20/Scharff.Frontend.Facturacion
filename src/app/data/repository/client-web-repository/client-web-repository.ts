import { Injectable } from '@angular/core';
import { ClientRepository } from '../../../core/repositories/client.repository';
import { ClientModel } from '../../../core/domain/client.model';
import { Observable } from 'rxjs';
import { ClientWebRepositoryMapper } from './client-web-repository-mapper';
import { HttpClient } from '@angular/common/http';
import { ClientWebEntity } from './client-web-entity';
import { flatMap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientWebRepository extends ClientRepository {

  mapper = new ClientWebRepositoryMapper();

  constructor(
    private http: HttpClient
  ) {
    super();
  }

  getClientById(id: number): Observable<ClientModel> {
    return this.http
      .get<ClientWebEntity>('')
      .pipe(map(this.mapper.mapFrom));
  }

  getAllClients(): Observable<ClientModel> {
    return this.http
      .get<ClientWebEntity[]>('')
      .pipe(flatMap((item) => item))
      .pipe(map(this.mapper.mapFrom));
  }
}
