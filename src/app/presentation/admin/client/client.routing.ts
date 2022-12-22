import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { DetailClientComponent } from "./manage-client/components/detail-client/detail-client.components";
import { ManageClientComponent } from "./manage-client/manage-client.component";


const routes: Routes = [

    { path: '', component: ManageClientComponent, data: { titulo: 'Gestionar Cliente' } },
    // { path: 'detail/:id', component: DetailClientComponent, data: { titulo: 'Detalle Del Cliente' } },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ClientRoutingModule { }
