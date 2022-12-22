import { Injectable } from '@angular/core';
import { ParamsModel } from '../../models/params.models';
import { Observable } from 'rxjs';
import { UseCase } from '../../base/use-case';
import { CountryRepository } from '../../repositories/country.repository';

@Injectable({
    providedIn: 'root'
})

export class GetAllCountryUsecase implements UseCase<void, ParamsModel> {

    constructor(
        private countryRepository: CountryRepository
    ) { }

    execute(): Observable<ParamsModel> {

        return this.countryRepository.getAllCountry();
    }
}
