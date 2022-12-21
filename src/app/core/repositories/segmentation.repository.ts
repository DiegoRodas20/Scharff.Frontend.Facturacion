import { Observable } from 'rxjs';
import { ParamsModel } from '../models/params.models';

export abstract class SegmentationRepository {

    abstract getAllSegmentations(): Observable<ParamsModel>;
}   