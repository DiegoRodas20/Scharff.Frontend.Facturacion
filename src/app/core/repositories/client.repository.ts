import { Observable } from 'rxjs';
import { ClientModel } from '../models/client.model';

export abstract class ClientRepository {
  abstract getClientById(id: number): Observable<ClientModel>;
  abstract getAllClients(): Observable<ClientModel>;
}