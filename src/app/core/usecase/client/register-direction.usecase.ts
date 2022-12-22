import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UseCase } from '../../base/use-case';
import { DirectionModel } from '../../models/direction.model';
import { DirectionRepository } from '../../repositories/direction.repository';

@Injectable({
    providedIn: 'root'
})

export class RegisterDirectionUsecase implements UseCase<DirectionModel, any> {

    constructor(
        private directionRepository: DirectionRepository
    ) { }

    execute(params: DirectionModel): Observable<DirectionModel> {
        return this.directionRepository.registerDirection(params);
    }
}
