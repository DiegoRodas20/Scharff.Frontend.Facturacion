import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientRoutingModule } from './client.routing';
import { ManageClientComponent } from './manage-client/manage-client.component';
import { PrimeNGModule } from 'src/app/common/shared/primeng/primeng.module';

const COMPONENTS = [
    ManageClientComponent
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
        
        ClientRoutingModule
    ]
})

export class ClientModule { }
