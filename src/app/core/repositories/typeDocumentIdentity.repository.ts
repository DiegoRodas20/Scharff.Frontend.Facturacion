import { Observable } from 'rxjs';
import { ParamsModel } from '../models/params.models';

export abstract class TypeDocumentIdentyRepository {

    abstract getAllTypesDocumentIdenty(): Observable<ParamsModel>;
}   