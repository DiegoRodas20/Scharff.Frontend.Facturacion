import { Observable } from 'rxjs';
import { ParamsModel } from '../models/params.models';

export abstract class HoldingRepository {

    abstract getAllHoldings(): Observable<ParamsModel>;
}   