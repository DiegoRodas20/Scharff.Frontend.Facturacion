import { Injectable } from '@angular/core';
import { UseCasePromise } from 'src/app/core/base/use-case-promise';
import { ClientModel } from 'src/app/core/models/client.model';
import { ResponseData } from 'src/app/core/models/response.model';
import { ClientRepository } from 'src/app/core/repositories/client.repository';

@Injectable({
    providedIn: 'root'
})

export class EnableClientUsecase implements UseCasePromise<number, number> {

    constructor(
        private _clientRepository: ClientRepository
    ) { }

    execute(idClient: number): Promise<ResponseData<number>> {

        return this._clientRepository.enableClient(idClient)
    }
}
