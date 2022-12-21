import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { PrimeNGModule } from './primeng/primeng.module';

const COMPONENTS = [
    ErrorMessageComponent
]

@NgModule({
    declarations: [
        COMPONENTS
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        PrimeNGModule
    ],
    exports: [
        PrimeNGModule,
        COMPONENTS
    ]
})

export class SharedModule { }
