import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientRoutingModule } from './client.routing';
import { ManageClientComponent } from './manage-client/manage-client.component';
import { PrimeNGModule } from 'src/app/common/shared/primeng/primeng.module';
import { HomeComponent } from './components/register-customer/home.component';
import { RegisterClientComponent } from './manage-client/components/register-client/register-client.component';

const COMPONENTS = [
    ManageClientComponent,
    HomeComponent,
    RegisterClientComponent
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
    ],
    entryComponents: [
        HomeComponent
    ]
})

export class ClientModule { }
