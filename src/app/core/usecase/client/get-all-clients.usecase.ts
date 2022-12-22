import { Injectable } from '@angular/core';
import { ClientRepository } from '../../repositories/client.repository';
import { ClientModel } from '../../models/client.model';
import { Observable } from 'rxjs';
import { UseCase } from '../../base/use-case';
import { UseCasePromise } from '../../base/use-case-promise';

@Injectable({
    providedIn: 'root'
})

export class GetAllClientsUsecase implements UseCasePromise<void, ClientModel[]> {

    constructor(
        private clientRepository: ClientRepository
    ) { }

    execute(): Promise<ClientModel[]> {

        return this.clientRepository.getAllClients()
    }
}
