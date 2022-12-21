import { Injectable } from '@angular/core';

import { from, Observable } from 'rxjs';
import { ParamsModel } from 'src/app/core/models/params.models';
import { BusinessGroupRepository } from 'src/app/core/repositories/businessGroup.repository';

@Injectable({
    providedIn: 'root'
})
export class BusinessMockRepository extends BusinessGroupRepository {
    businessGroups = [
        {
            id: 1,
            code: 'GE1',
            description: 'Grupo Empresarial A'
        },
        {
            id: 2,
            code: 'GE2',
            description: 'Grupo Empresarial B'
        }
    ];

    constructor() {
        super();
    }

    getAllBusinessGroups(): Observable<ParamsModel> {
        return from(this.businessGroups)
    }

}
