import { Injectable } from '@angular/core';
import { ParamsModel } from '../../models/params.models';
import { Observable } from 'rxjs';
import { UseCase } from '../../base/use-case';
import { TypeDirectionRepository } from '../../repositories/typeDirection.repository';

@Injectable({
    providedIn: 'root'
})

export class GetAllTypeDirectionUsecase implements UseCase<void, ParamsModel> {

    constructor(
        private typeDirectionRepository: TypeDirectionRepository
    ) { }

    execute(): Observable<ParamsModel> {

        return this.typeDirectionRepository.getAllTypeDirection();
    }
}
