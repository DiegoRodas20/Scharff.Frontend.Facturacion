import { Injectable } from '@angular/core';

import { from, Observable } from 'rxjs';
import { ParamsModel } from 'src/app/core/models/params.models';
import { HoldingRepository } from 'src/app/core/repositories/holding.repository';
import { SegmentationRepository } from 'src/app/core/repositories/segmentation.repository';

@Injectable({
    providedIn: 'root'
})
export class HoldingMockRepository extends HoldingRepository {
    holding = [
        {
            id: 1,
            code: 'HOO1',
            description: 'Holding A'
        },
        {
            id: 2,
            code: 'H002',
            description: 'Holding B'
        }
    ];

    constructor() {
        super();
    }

    getAllHoldings(): Observable<ParamsModel> {
        return from(this.holding)
    }

}
