import { Observable } from 'rxjs';
import { ParamsModel } from '../models/params.models';

export abstract class TypeDirectionRepository {

    abstract getAllTypeDirection(): Observable<ParamsModel>;
}   