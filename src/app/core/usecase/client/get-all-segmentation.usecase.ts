import { Injectable } from '@angular/core';
import { ParamsModel } from '../../models/params.models';
import { Observable } from 'rxjs';
import { UseCase } from '../../base/use-case';
import { SegmentationRepository } from '../../repositories/segmentation.repository';

@Injectable({
    providedIn: 'root'
})

export class GetAllSegmentationUsecase implements UseCase<void, ParamsModel> {

    constructor(
        private segmentationRepository: SegmentationRepository
    ) { }

    execute(): Observable<ParamsModel> {

        return this.segmentationRepository.getAllSegmentations();
    }
}
