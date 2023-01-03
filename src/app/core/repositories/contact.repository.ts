import { ContactModel, RegisterContact } from '../models/contact.model';
import { ResponseData } from '../models/response.model';

export abstract class ContactRepository {

    abstract getAllContactsByClientId(idClient: number): Promise<ResponseData<ContactModel[]>>

    abstract getContactById(idContact: number): Promise<ResponseData<ContactModel>>

    abstract registerContactByClientId(contact: RegisterContact): Promise<ResponseData<ContactModel>>

    abstract updateContactById(idContact: number, contact: ContactModel): Promise<ResponseData<ContactModel>>

    abstract deleteContactById(idContact: number): Promise<ResponseData<number>>

}