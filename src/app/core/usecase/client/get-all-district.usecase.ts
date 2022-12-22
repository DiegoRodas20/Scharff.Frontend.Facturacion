import { Injectable } from '@angular/core';
import { ParamsModel } from '../../models/params.models';
import { Observable } from 'rxjs';
import { UseCase } from '../../base/use-case';
import { DistrictRepository } from '../../repositories/distric.repository';

@Injectable({
    providedIn: 'root'
})

export class GetAllDistrictUsecase implements UseCase<void, ParamsModel> {

    constructor(
        private districtRepository: DistrictRepository
    ) { }

    execute(): Observable<ParamsModel> {

        return this.districtRepository.getAllDistricts();
    }
}
