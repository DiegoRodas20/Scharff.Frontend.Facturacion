import { Observable } from 'rxjs';
import { ParamsModel } from '../models/params.models';

export abstract class BusinessGroupRepository {

    abstract getAllBusinessGroups(): Observable<ParamsModel>;
}   