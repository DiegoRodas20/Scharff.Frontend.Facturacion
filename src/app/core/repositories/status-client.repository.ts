import { Observable } from 'rxjs';
import { ParamsModel } from '../models/params.models';

export abstract class StatusClientRepository {

    abstract getAllStatusClient(): Observable<ParamsModel>;
}   