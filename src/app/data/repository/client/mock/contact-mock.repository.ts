import { Injectable } from '@angular/core';

import { from, Observable } from 'rxjs';
import { ContactModel } from 'src/app/core/models/contact.model';
import { ContactRepository } from 'src/app/core/repositories/contact.repository';


@Injectable({
    providedIn: 'root'
})
export class ContactMockRepository extends ContactRepository {

    constructor() {
        super();
    }

    registerContact(body: ContactModel): any {
        console.log('RESPONSEEEE XD', body)
        return from([{}])
    }

    updateContact(params: ContactModel): any {}
}
