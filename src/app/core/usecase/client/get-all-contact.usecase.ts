import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UseCase } from '../../base/use-case';
import { ContactModel } from '../../models/contact.model';
import { ContactRepository } from '../../repositories/contact.repository';

@Injectable({
    providedIn: 'root'
})

export class GetAllContactsUsecase implements UseCase<void, ContactModel> {

    constructor(
        private contactRepository: ContactRepository
    ) { }

    execute(): Observable<ContactModel> {

        return this.contactRepository.getAllContacts();
    }
}
