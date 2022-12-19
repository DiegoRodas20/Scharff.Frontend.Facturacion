import { Component, OnInit } from '@angular/core';
import { MegaMenuItem } from 'primeng/api';

@Component({
    selector: 'app-layout',
    templateUrl: 'layout.component.html',
    styleUrls: ['./layout.component.scss'],
})

export class LayoutComponent implements OnInit {

    items: MegaMenuItem[] = [];

    constructor() { }

    ngOnInit() {
        this.setItemsMenu()
    }

    setItemsMenu() {
        this.items = [
            {
                label: 'Cliente', items: []
            },

            {
                label: 'Facturacion', items: []
            },

            {
                label: 'Tarifas', items: []
            },

            {
                label: 'Liquidacion', items: []
            },
        ]
    }
}