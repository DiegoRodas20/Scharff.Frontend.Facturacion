import { Injectable } from '@angular/core';
import { CoinRepository } from '../../repositories/coin.repository';
import { ParamsModel } from '../../models/params.models';
import { Observable } from 'rxjs';
import { UseCase } from '../../base/use-case';

@Injectable({
    providedIn: 'root'
})

export class GetAllCoinsUsecase implements UseCase<void, ParamsModel> {

    constructor(
        private coinRepository: CoinRepository
    ) { }

    execute(): Observable<ParamsModel> {

        return this.coinRepository.getAllCoins();
    }
}
