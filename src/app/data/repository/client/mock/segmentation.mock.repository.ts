import { Injectable } from '@angular/core';

import { from, Observable } from 'rxjs';
import { ParamsModel } from 'src/app/core/models/params.models';
import { SegmentationRepository } from 'src/app/core/repositories/segmentation.repository';

@Injectable({
    providedIn: 'root'
})
export class SegmentationMockRepository extends SegmentationRepository {
    segmentations = [
        {
            id: 1,
            code: 'CS01',
            description: 'CXC CLIENTES CORPORATIVOS'
        },
        {
            id: 2,
            code: 'CXC CLIENTES CORPORATIVOS',
            description: 'CXC CLIENTES MEDIOS'
        }
    ];

    constructor() {
        super();
    }

    getAllSegmentations(): Observable<ParamsModel> {
        return from(this.segmentations)
    }

}
