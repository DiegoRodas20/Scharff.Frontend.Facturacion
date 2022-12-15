import { Injectable } from '@angular/core';
import { ClientModel } from '../domain/client.model';
import { UseCase } from '../base/use-case';
import { Observable } from 'rxjs';
import { ClientRepository } from '../repositories/client.repository';

@Injectable({
  providedIn: 'root'
})
export class GetElclientByIdUsecase implements UseCase<number, ClientModel> {

  constructor(private clientRepository: ClientRepository) { }

  execute(params: number): Observable<ClientModel> {
    return this.clientRepository.getClientById(params);
  }
}
