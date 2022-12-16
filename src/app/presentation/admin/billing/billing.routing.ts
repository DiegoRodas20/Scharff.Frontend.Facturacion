import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { ManageBillingComponent } from "./manage-billing/manage-billing.component";


const routes: Routes = [

    { path: '', component: ManageBillingComponent, data: { titulo: 'Gestionar Facturacion' } },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class BillingRoutingModule { }