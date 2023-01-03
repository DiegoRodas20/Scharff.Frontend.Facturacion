import { Injectable } from '@angular/core';
import { UseCasePromise } from 'src/app/core/base/use-case-promise';
import { ContactModel } from 'src/app/core/models/contact.model';
import { ResponseData } from 'src/app/core/models/response.model';
import { ContactRepository } from 'src/app/core/repositories/contact.repository';

@Injectable({
    providedIn: 'root'
})

export class DeleteContactByIdUsecase implements UseCasePromise<number, number> {

    constructor(
        private _contactRepository: ContactRepository
    ) { }

    execute(idClient: number): Promise<ResponseData<number>> {

        return this._contactRepository.deleteContactById(idClient)
    }
}
