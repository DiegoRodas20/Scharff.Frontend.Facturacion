import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { ClientComponent } from "./client/client.component";

const routes: Routes = [
    {
        path: '',
        children: [
            { path: 'client', component: ClientComponent },
            { path: '**', redirectTo: 'client' }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ]
})
export class AdminRoutingModule {}