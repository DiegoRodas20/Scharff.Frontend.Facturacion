import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { ManageSettlementComponent } from "./manage-settlement/manage-settlement.component";


const routes: Routes = [

    { path: '', component: ManageSettlementComponent, data: { titulo: 'Gestionar Liquidacion' } },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class SettlementRoutingModule { }