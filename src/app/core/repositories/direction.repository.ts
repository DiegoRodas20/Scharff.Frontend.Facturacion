import { Observable } from 'rxjs';
import { DirectionModel } from '../models/direction.model';

export abstract class DirectionRepository {

    abstract registerDirection(params: DirectionModel): Observable<DirectionModel>;
    abstract updateDirection(params: DirectionModel): Observable<DirectionModel>;
    abstract getAllDirections(): Observable<DirectionModel>;
}
