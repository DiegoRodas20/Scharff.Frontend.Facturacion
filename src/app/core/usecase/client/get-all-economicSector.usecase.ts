import { Injectable } from '@angular/core';
import { ParamsModel } from '../../models/params.models';
import { Observable } from 'rxjs';
import { UseCase } from '../../base/use-case';
import { EconomicSectorRepository } from '../../repositories/economicSector.repository';

@Injectable({
    providedIn: 'root'
})

export class GetAllEconomicSectorUsecase implements UseCase<void, ParamsModel> {

    constructor(
        private economicSectorRepository: EconomicSectorRepository
    ) { }

    execute(): Observable<ParamsModel> {

        return this.economicSectorRepository.getAllEconomicSector();
    }
}
