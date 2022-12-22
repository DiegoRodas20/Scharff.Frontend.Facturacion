import { Observable } from 'rxjs';
import { ParamsModel } from '../models/params.models';

export abstract class CountryRepository {

    abstract getAllCountry(): Observable<ParamsModel>;
}   