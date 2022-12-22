import { Observable } from 'rxjs';
import { ParamsModel } from '../models/params.models';

export abstract class TypeContactRepository {

    abstract getAllTypeContacts(): Observable<ParamsModel>;
}   