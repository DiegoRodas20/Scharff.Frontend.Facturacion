import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ManageSettlementComponent } from './manage-settlement/manage-settlement.component';
import { SettlementRoutingModule } from './settlement.routing';
import { PrimeNGModule } from 'src/app/common/shared/primeng/primeng.module';

const COMPONENTS = [
    ManageSettlementComponent
]

@NgModule({
    declarations: [
        COMPONENTS
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        PrimeNGModule,
        SettlementRoutingModule
    ]
})

export class SettlementModule { }
