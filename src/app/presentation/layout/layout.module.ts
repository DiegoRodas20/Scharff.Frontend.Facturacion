import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ListboxModule } from 'primeng/listbox';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';

import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    DialogModule,
    ButtonModule,
    CardModule,
    ListboxModule,
    InputTextModule,
    FormsModule,
    DropdownModule,
    CheckboxModule
  ]
})
export class LayoutModule { }
