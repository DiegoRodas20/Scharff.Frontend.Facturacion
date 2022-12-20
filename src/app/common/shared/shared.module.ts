import { NgModule } from '@angular/core';
import { PrimeNGModule } from './primeng/primeng.module';


@NgModule({
    imports: [
        PrimeNGModule
    ],
    exports: [
        PrimeNGModule
    ]
})

export class SharedModule { }
