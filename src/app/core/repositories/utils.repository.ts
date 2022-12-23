import { ClientModel } from '../models/client.model';
import { ResponseData } from '../models/response.model';

export abstract class UtilsRepository {

    abstract verifyIdentify(client: ClientModel): Promise<ResponseData<ClientModel>>

    abstract registerClientSAP(client: ClientModel): Promise<ResponseData<ClientModel>>

}
