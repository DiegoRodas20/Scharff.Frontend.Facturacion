import { Injectable } from '@angular/core';
import { ClientRepository } from '../../../core/repositories/client.repository';
import { ClientModel } from '../../../core/domain/client.model';
import { from, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { ClientMockEntity } from './Client-mock-entity';
import { ClientMockRepositoryMapper } from './client-mock-repository-mapper';

@Injectable({
  providedIn: 'root'
})
export class ClientMockRepository extends ClientRepository {

  private mapper = new ClientMockRepositoryMapper();

  Clients = [
    {
      'id': 1,
      'name': 'Mr. MockBig',
      'family': 'father',
      'birthday': new Date()
    },
    {
      'id': 2,
      'name': 'Mrs. MockTootoot',
      'family': 'mother',
      'birthday': new Date()
    },
    {
      'id': 3,
      'name': 'LittleMockToot',
      'family': 'baby',
      'birthday': new Date()
    }
  ];

  constructor() {
    super();
  }

  getClientById(id: number): Observable<ClientModel> {
    return from(this.Clients)
      .pipe(filter((client: ClientMockEntity) => client.id === id))
      .pipe(map(this.mapper.mapFrom));
  }

  getAllClients(): Observable<ClientModel> {
    return from(this.clients)
      .pipe(map(this.mapper.mapFrom));
  }
}
