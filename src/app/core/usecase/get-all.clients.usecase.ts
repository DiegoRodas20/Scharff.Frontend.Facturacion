import { Injectable } from '@angular/core';
import { ClientRepository } from '../repositories/client.repository';
import { UseCase } from '../base/use.case';
import { ClientModel } from '../domain/client.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetAllClientsUsecase implements UseCase<void, ClientModel> {

  constructor(private clientRepository: ClientRepository) { }

  execute(params: void): Observable<ClientModel> {
    return this.clientRepository.getAllClients();
  }
}
