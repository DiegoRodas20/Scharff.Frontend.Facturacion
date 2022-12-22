import { Injectable } from '@angular/core';

import { from, Observable } from 'rxjs';
import { DirectionModel } from 'src/app/core/models/direction.model';
import { DirectionRepository } from 'src/app/core/repositories/direction.repository';


@Injectable({
    providedIn: 'root'
})
export class DirectionMockRepository extends DirectionRepository {

    constructor() {
        super();
    }

    registerDirection(body: DirectionModel): any {
        console.log('RESPONSEEEE XD', body)
        return from([{}])
    }

    updateDirection(body: DirectionModel): any {}
}
