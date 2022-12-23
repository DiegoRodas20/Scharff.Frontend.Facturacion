import { Injectable } from '@angular/core';
import { ParamsModel } from '../../models/params.models';
import { Observable } from 'rxjs';
import { UseCase } from '../../base/use-case';
import { TypeContactRepository } from '../../repositories/typContact.repository';

@Injectable({
    providedIn: 'root'
})

export class GetAllTypeContactUsecase implements UseCase<void, ParamsModel> {

    constructor(
        private typeContactRepository: TypeContactRepository
    ) { }

    execute(): Observable<ParamsModel> {

        return this.typeContactRepository.getAllTypeContacts();
    }
}
