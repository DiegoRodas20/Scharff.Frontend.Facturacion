import { Injectable } from '@angular/core';

import { from, Observable } from 'rxjs';
import { ParamsModel } from 'src/app/core/models/params.models';
import { TypeDocumentIdentyRepository } from 'src/app/core/repositories/typeDocumentIdentity.repository';

@Injectable({
    providedIn: 'root'
})
export class TypeDocumentIdentyMockRepository extends TypeDocumentIdentyRepository {
    typeDocumentIdenty = [
        {
            id: 1,
            code: 'TDI1',
            description: 'Documento Nacional de Identidad'
        },
        {
            id: 2,
            code: 'TDI2',
            description: 'Carnet de extranjería'
        },
        {
            id: 3,
            code: 'TDI3',
            description: 'Pasaporte'
        },
        {
            id: 4,
            code: 'TDI4',
            description: 'Registro Unico de Contributentes'
        }
    ];

    constructor() {
        super();
    }

    getAllTypesDocumentIdenty(): Observable<ParamsModel> {
        return from(this.typeDocumentIdenty)
    }

}
