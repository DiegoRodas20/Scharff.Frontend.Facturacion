import { Injectable } from '@angular/core';
import { BusinessGroupRepository } from '../../repositories/businessGroup.repository';
import { ParamsModel } from '../../models/params.models';
import { Observable } from 'rxjs';
import { UseCase } from '../../base/use-case';

@Injectable({
    providedIn: 'root'
})

export class GetAllBusinessGroupUsecase implements UseCase<void, ParamsModel> {

    constructor(
        private businessGroupRepository: BusinessGroupRepository
    ) { }

    execute(): Observable<ParamsModel> {

        return this.businessGroupRepository.getAllBusinessGroups();
    }
}
