import { Injectable } from '@angular/core';
import { ClientRepository } from '../../repositories/client.repository';
import { ClientModel } from '../../models/client.model';
import { Observable } from 'rxjs';
import { UseCase } from '../../base/use-case';

@Injectable({
    providedIn: 'root'
})

export class RegisterClientsUsecase implements UseCase<ClientModel, any> {

    constructor(
        private clientRepository: ClientRepository
    ) { }

    execute(params: ClientModel): Observable<ClientModel> {
        return this.clientRepository.createClient(params);
    }
}
