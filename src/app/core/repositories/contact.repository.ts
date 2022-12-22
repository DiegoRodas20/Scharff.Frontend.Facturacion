import { Observable } from 'rxjs';
import { ContactModel } from '../models/contact.model';

export abstract class ContactRepository {

    abstract registerContact(params: ContactModel): Observable<ContactModel>;
    abstract updateContact(params: ContactModel): Observable<ContactModel>;
}