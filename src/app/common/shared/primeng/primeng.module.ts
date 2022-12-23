import { NgModule } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { AccordionModule } from "primeng/accordion";
import { AnimateModule } from "primeng/animate";
import { BadgeModule } from "primeng/badge";
import { BreadcrumbModule } from "primeng/breadcrumb";
import { CalendarModule } from "primeng/calendar";
import { CardModule } from "primeng/card";
import { CheckboxModule } from "primeng/checkbox";
import { DialogModule } from "primeng/dialog";
import { InputTextModule } from "primeng/inputtext";
import { MegaMenuModule } from 'primeng/megamenu';
import { ListboxModule } from 'primeng/listbox';
import { DropdownModule } from 'primeng/dropdown';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DividerModule } from 'primeng/divider';
import { PasswordModule } from 'primeng/password';
import { TabViewModule } from 'primeng/tabview';
import { MenubarModule } from 'primeng/menubar';
import { TabMenuModule } from 'primeng/tabmenu';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';


const COMPONENTS = [
    AnimateModule,
    AccordionModule,
    BadgeModule,
    ButtonModule,
    BreadcrumbModule,
    CalendarModule,
    CardModule,
    CheckboxModule,
    DialogModule,
    InputTextModule,
    MegaMenuModule,
    ListboxModule,
    DropdownModule,
    DynamicDialogModule,
    DividerModule,
    PasswordModule,
    TabViewModule,
    MenubarModule,
    TabMenuModule,
    InputTextareaModule,
    ToastModule,
    ConfirmDialogModule
]

@NgModule({
    imports: [
        COMPONENTS
    ],
    exports: [
        COMPONENTS
    ]
})

export class PrimeNGModule { }
