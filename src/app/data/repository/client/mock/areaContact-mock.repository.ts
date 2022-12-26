import { Injectable } from '@angular/core';

import { from, Observable } from 'rxjs';
import { ParamsModel } from 'src/app/core/models/params.models';
import { AreaContactRepository } from 'src/app/core/repositories/areaContact.repository';

@Injectable({
    providedIn: 'root'
})
export class AreaContactMockRepository extends AreaContactRepository {
    areaContacts = [
        {
            id: 18,
            code: '003',
            description: 'Area contacto A'
          },
          {
            id: 19,
            code: '003',
            description: 'Area contacto B'
          },
    ];

    constructor() {
        super();
    }

    getAllAreaContacts(): Observable<ParamsModel> {
        return from(this.areaContacts)
    }

}
