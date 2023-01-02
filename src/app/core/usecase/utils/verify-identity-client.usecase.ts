import { Injectable } from '@angular/core';
import { UseCasePromise } from 'src/app/core/base/use-case-promise';
import { ClientModel } from 'src/app/core/models/client.model';
import { ResponseData } from 'src/app/core/models/response.model';
import { ClientRepository } from 'src/app/core/repositories/client.repository';
import { UtilsRepository } from '../../repositories/utils.repository';

@Injectable({
    providedIn: 'root'
})

export class VerifyIdentityClientUsecase implements UseCasePromise<string, ClientModel> {

    constructor(
        private _utilsRepository: UtilsRepository
    ) { }

    execute(numberDocumentIdentity: string): Promise<ResponseData<ClientModel>> {

        return this._utilsRepository.verifyIdentity(numberDocumentIdentity)
    }
}
