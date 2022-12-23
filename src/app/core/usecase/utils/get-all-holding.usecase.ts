import { Injectable } from '@angular/core';
import { ParamsModel } from '../../models/params.models';
import { Observable } from 'rxjs';
import { UseCase } from '../../base/use-case';
import { HoldingRepository } from '../../repositories/holding.repository';

@Injectable({
    providedIn: 'root'
})

export class GetAllHoldingUsecase implements UseCase<void, ParamsModel> {

    constructor(
        private HoldingRepository: HoldingRepository
    ) { }

    execute(): Observable<ParamsModel> {

        return this.HoldingRepository.getAllHoldings();
    }
}
