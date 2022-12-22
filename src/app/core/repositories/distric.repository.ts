import { Observable } from 'rxjs';
import { ParamsModel } from '../models/params.models';

export abstract class DistrictRepository {

    abstract getAllDistricts(): Observable<ParamsModel>;
}   