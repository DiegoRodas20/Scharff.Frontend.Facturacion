import { Observable } from 'rxjs';
import { ParamsModel } from '../models/params.models';

export abstract class AreaContactRepository {

    abstract getAllAreaContacts(): Observable<ParamsModel>;
}   