import { Injectable } from '@angular/core';
import { ClientRepository } from '../../repositories/client.repository';
import { Observable } from 'rxjs';
import { UseCase } from '../../base/use-case';
import { ClientModel } from '../../models/client.model';

@Injectable({
    providedIn: 'root'
})

export class GetClientByIdUsecase implements UseCase<void, ClientModel> {

    constructor(
        private clientRepository: ClientRepository
    ) { }

    execute(params: void): Observable<ClientModel> {

        return this.clientRepository.getClientById();
    }
}
