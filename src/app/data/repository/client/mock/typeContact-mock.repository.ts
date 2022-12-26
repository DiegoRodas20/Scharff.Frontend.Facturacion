import { Injectable } from '@angular/core';

import { from, Observable } from 'rxjs';
import { ParamsModel } from 'src/app/core/models/params.models';
import { TypeContactRepository } from 'src/app/core/repositories/typContact.repository';

@Injectable({
    providedIn: 'root'
})
export class TypeContactMockRepository extends TypeContactRepository {
    typeContacts = [
        {
            id: 16,
            code: '003',
            description: 'Contacto Interno'
          },
          {
            id: 17,
            code: '002',
            description: 'Contacto Externo'
          } 
    ];

    constructor() {
        super();
    }

    getAllTypeContacts(): Observable<ParamsModel> {
        return from(this.typeContacts)
    }

}
