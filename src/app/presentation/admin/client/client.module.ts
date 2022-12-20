import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientRoutingModule } from './client.routing';
import { ManageClientComponent } from './manage-client/manage-client.component';
import { PrimeNGModule } from 'src/app/common/shared/primeng/primeng.module';
import { RegisterClientComponent } from './manage-client/components/register-client/register-client.component';
//detail-client
import { DetailClientComponent } from './manage-client/components/detail-client/detail-client.components';
import { InformationClientComponent } from './manage-client/components/detail-client/information-client/information-client.component';


const COMPONENTS = [
    ManageClientComponent,
    RegisterClientComponent,
    DetailClientComponent,
    InformationClientComponent
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
        ClientRoutingModule,
    ]
})

export class ClientModule { }
