import { Injectable } from '@angular/core';
import { ParamsModel } from '../../models/params.models';
import { Observable } from 'rxjs';
import { UseCase } from '../../base/use-case';
import { TypeDocumentIdentyRepository } from '../../repositories/typeDocumentIdentity.repository';

@Injectable({
    providedIn: 'root'
})

export class GetAllTypeDocumentIdentyUsecase implements UseCase<void, ParamsModel> {

    constructor(
        private typeDocumentIdentyRepository: TypeDocumentIdentyRepository
    ) { }

    execute(): Observable<ParamsModel> {

        return this.typeDocumentIdentyRepository.getAllTypesDocumentIdenty();
    }
}
