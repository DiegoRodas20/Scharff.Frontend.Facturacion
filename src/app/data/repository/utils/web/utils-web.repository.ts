import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { ClientModel } from 'src/app/core/models/client.model';
import { UTILS_URL } from 'src/app/common/helpers/constants/url.constants';
import { ResponseData } from 'src/app/core/models/response.model';
import { UtilsRepository } from 'src/app/core/repositories/utils.repository';


@Injectable({
    providedIn: 'root'
})

export class UtilsWebRepository extends UtilsRepository {

    constructor(
        private http: HttpClient
    ) {
        super();
    }

    // Verificar identificacion por numero de documento
    verifyIdentity(numberDocumentIdentity: string): Promise<ResponseData<ClientModel>> {

        const url = `${UTILS_URL}/verifyidentify/${numberDocumentIdentity}`
        return lastValueFrom(this.http.get<ResponseData<ClientModel>>(url))
    }

    // Crear cliente en SAP
    registerClientSAP(client: ClientModel): Promise<ResponseData<ClientModel>> {

        const url = `${UTILS_URL}/createSAP`
        return lastValueFrom(this.http.post<ResponseData<ClientModel>>(url, client))
    }


}
