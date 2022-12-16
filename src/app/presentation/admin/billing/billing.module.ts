import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BillingRoutingModule } from './billing.routing';
import { ManageBillingComponent } from './manage-billing/manage-billing.component';
import { PrimeNGModule } from 'src/app/common/shared/primeng/primeng.module';

const COMPONENTS = [
    ManageBillingComponent
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
        
        BillingRoutingModule
    ]
})

export class BillingModule { }
