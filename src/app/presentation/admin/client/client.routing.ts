import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { ManageClientComponent } from "./manage-client/manage-client.component";


const routes: Routes = [

    { path: '', component: ManageClientComponent, data: { titulo: 'Gestionar Cliente' } },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ClientRoutingModule { }