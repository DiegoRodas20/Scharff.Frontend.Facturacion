import { Injectable } from '@angular/core';
import { ParamsModel } from '../../models/params.models';
import { Observable } from 'rxjs';
import { UseCase } from '../../base/use-case';
import { ProvinceRepository } from '../../repositories/province.repository';

@Injectable({
    providedIn: 'root'
})

export class GetAllProvincesUsecase implements UseCase<void, ParamsModel> {

    constructor(
        private provinceRepository: ProvinceRepository
    ) { }

    execute(): Observable<ParamsModel> {

        return this.provinceRepository.getAllProvinces();
    }
}
