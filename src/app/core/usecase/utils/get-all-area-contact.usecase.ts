import { Injectable } from '@angular/core';
import { ParamsModel } from '../../models/params.models';
import { Observable } from 'rxjs';
import { UseCase } from '../../base/use-case';
import { AreaContactRepository } from '../../repositories/areaContact.repository';

@Injectable({
    providedIn: 'root'
})

export class GetAllAreaContactUsecase implements UseCase<void, ParamsModel> {

    constructor(
        private areaContactRepository: AreaContactRepository
    ) { }

    execute(): Observable<ParamsModel> {

        return this.areaContactRepository.getAllAreaContacts();
    }
}
