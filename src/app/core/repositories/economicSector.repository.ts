import { Observable } from 'rxjs';
import { ParamsModel } from '../models/params.models';

export abstract class EconomicSectorRepository {

    abstract getAllEconomicSector(): Observable<ParamsModel>;
}   