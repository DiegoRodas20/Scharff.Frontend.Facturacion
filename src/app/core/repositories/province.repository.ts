import { Observable } from 'rxjs';
import { ParamsModel } from '../models/params.models';

export abstract class ProvinceRepository {

    abstract getAllProvinces(): Observable<ParamsModel>;
}   