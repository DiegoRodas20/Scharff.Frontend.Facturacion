import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-layout',
    templateUrl: 'layout.component.html',
    styleUrls: ['./layout.component.scss'],
})

export class LayoutComponent implements OnInit {

    items: MenuItem[] = [];

    constructor() { }

    ngOnInit() {
        this.setItemsMenu()
    }

    setItemsMenu() {
        this.items = [
            {
                label: 'Clientes'
            },

            {
                label: 'Facturación'
            },

            {
                label: 'Liquidación'
            },

            {
                label: 'Tarifas'
            },
        ]
    }
}