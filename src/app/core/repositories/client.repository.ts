import { Observable } from 'rxjs';
import { ClientModel } from '../models/client.model';

export abstract class ClientRepository {

    abstract getAllClients(): Observable<ClientModel>;

}