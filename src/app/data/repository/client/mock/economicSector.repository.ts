import { Injectable } from '@angular/core';

import { from, Observable } from 'rxjs';
import { ParamsModel } from 'src/app/core/models/params.models';
import { EconomicSectorRepository } from 'src/app/core/repositories/economicSector.repository';

@Injectable({
    providedIn: 'root'
})
export class EconomicSectorMockRepository extends EconomicSectorRepository {
    economicSector = [
        {
            id: 1,
            code: 'ES1',
            description: 'TEXTIL'
        },
        {
            id: 2,
            code: 'ES2',
            description: 'MINERAL'
        },
        {
            id: 3,
            code: 'ES1',
            description: 'CONSTRUCCION'
        },
        {
            id: 4,
            code: 'ES2',
            description: 'PESCA'
        },
        {
            id: 5,
            code: 'ES1',
            description: 'INDUSTRIAL'
        },
        {
            id: 6,
            code: 'ES2',
            description: 'AGRICULTURA'
        },
        {
            id: 7,
            code: 'ES1',
            description: 'SERVICIOS'
        },
        {
            id: 8,
            code: 'ES2',
            description: 'FINANCIERO'
        }
    ];

    constructor() {
        super();
    }

    getAllEconomicSector(): Observable<ParamsModel> {
        return from(this.economicSector)
    }

}
