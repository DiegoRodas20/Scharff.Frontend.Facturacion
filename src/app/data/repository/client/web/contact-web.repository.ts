import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { CONTACT_URL } from 'src/app/common/helpers/constants/url.constants';
import { ResponseData } from 'src/app/core/models/response.model';
import { ContactModel } from 'src/app/core/models/contact.model';
import { ContactRepository } from 'src/app/core/repositories/contact.repository';


@Injectable({
    providedIn: 'root'
})

export class ContactWebRepository extends ContactRepository {

    constructor(
        private http: HttpClient
    ) {
        super();
    }

    // Listado general de contactos por Cliente
    getAllContactsByClientId(idClient: number): Promise<ResponseData<ContactModel>> {

        const url = `${CONTACT_URL}/all/${idClient}`
        return lastValueFrom(this.http.get<ResponseData<ContactModel>>(url))
    }

    // Listado de contacto por su id
    getContactById(idClient: number): Promise<ResponseData<ContactModel>> {

        const url = `${CONTACT_URL}/${idClient}`
        return lastValueFrom(this.http.get<ResponseData<ContactModel>>(url))
    }

    // Registrar contacto por cliente
    registerContactByClientId(contact: ContactModel): Promise<ResponseData<ContactModel>> {
        
        const url = `${CONTACT_URL}`
        return lastValueFrom(this.http.post<ResponseData<ContactModel>>(url, contact))
    }

    // Actualizar contacto por cliente
    updateContactById(idContact: number, contact: ContactModel): Promise<ResponseData<ContactModel>> {
        
        const url = `${CONTACT_URL}/${idContact}`
        return lastValueFrom(this.http.put<ResponseData<ContactModel>>(url, contact))
    }

    // Eliminar contacto por cliente
    deleteContactById(idContact: number): Promise<ResponseData<ContactModel>> {
        
        const url = `${CONTACT_URL}/${idContact}`
        return lastValueFrom(this.http.delete<ResponseData<ContactModel>>(url))
    }
}
