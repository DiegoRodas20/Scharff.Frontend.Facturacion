import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UseCase } from '../../base/use-case';
import { ContactModel } from '../../models/contact.model';
import { ContactRepository } from '../../repositories/contact.repository';

@Injectable({
    providedIn: 'root'
})

export class RegisterContactsUsecase implements UseCase<ContactModel, any> {

    constructor(
        private contactRepository: ContactRepository
    ) { }

    execute(params: ContactModel): Observable<ContactModel> {
        return this.contactRepository.registerContact(params);
    }
}
