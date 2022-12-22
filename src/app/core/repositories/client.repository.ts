import { Observable } from 'rxjs';
import { ClientModel } from '../models/client.model';

export abstract class ClientRepository {

    abstract getAllClients(): Promise<ClientModel[]>;
    abstract getClientById(): Observable<ClientModel>;
    abstract createClient(params: ClientModel): Observable<ClientModel>;

}
