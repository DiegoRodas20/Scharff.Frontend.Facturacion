import { Observable } from 'rxjs';
import { ParamsModel } from '../models/params.models';

export abstract class CoinRepository {

    abstract getAllCoins(): Observable<ParamsModel>;
}   