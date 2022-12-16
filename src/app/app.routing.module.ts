import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './presentation/layout/home/home.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: 'home',
                loadChildren: () => import('./presentation/admin/admin.module').then(module => module.AdminModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}