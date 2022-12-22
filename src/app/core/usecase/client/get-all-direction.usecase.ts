import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UseCase } from '../../base/use-case';
import { DirectionRepository } from '../../repositories/direction.repository';
import { DirectionModel } from '../../models/direction.model';

@Injectable({
    providedIn: 'root'
})

export class GetAllDirectionsUsecase implements UseCase<void, DirectionModel> {

    constructor(
        private directionRepository: DirectionRepository
    ) { }

    execute(): Observable<DirectionModel> {

        return this.directionRepository.getAllDirections();
    }
}
