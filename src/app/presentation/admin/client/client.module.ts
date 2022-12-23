import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientRoutingModule } from './client.routing';
import { ManageClientComponent } from './manage-client/manage-client.component';
import { PrimeNGModule } from 'src/app/common/shared/primeng/primeng.module';

// Client Components
import { UpdateClientComponent } from './manage-client/components/update-client/update-client.component';
import { RegisterClientComponent } from './manage-client/components/register-client/register-client.component';
import { InformationClientComponent } from './manage-client/components/detail-client/information-client/information-client.component';
import { ContactsClientComponent } from './manage-client/components/detail-client/contacts-client/contacts-client.component';
import { CreditLineComponent } from './manage-client/components/detail-client/credit-line/credit-line.component';
import { DirectionsClientComponent } from './manage-client/components/detail-client/directions-client/directions-client.component';
import { SharedModule } from 'src/app/common/shared/shared.module';
import { RegisterContactComponent } from './manage-client/components/detail-client/contacts-client/components/register-contact/register-contact.component'; 
import { UpdateContactComponent } from './manage-client/components/detail-client/contacts-client/components/update-contact/update-contact.component'; 
import { DetailClientComponent } from './manage-client/components/detail-client/detail-client.component';
import { RegisterDirectionComponent } from './manage-client/components/detail-client/directions-client/components/register-direction/register-direction.component';
import { UpdateDirectionComponent } from './manage-client/components/detail-client/directions-client/components/update-direction/update-direction.component';
import { PipeModule } from 'src/app/common/helpers/pipes/pipe.module';


const COMPONENTS = [
    ManageClientComponent,
    RegisterClientComponent,
    DetailClientComponent,
    InformationClientComponent,
    UpdateClientComponent,
    ContactsClientComponent,
    CreditLineComponent,
    DirectionsClientComponent,
    RegisterContactComponent,
    UpdateContactComponent,
    RegisterDirectionComponent,
    UpdateDirectionComponent
]

@NgModule({
    declarations: [
        COMPONENTS
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        PipeModule,
        ReactiveFormsModule,
        PrimeNGModule,
        SharedModule,
        ClientRoutingModule,
    ],
})

export class ClientModule { }
