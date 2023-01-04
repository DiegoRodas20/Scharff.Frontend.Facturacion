import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-manage-billing',
    templateUrl: './manage-billing.component.html',
    styleUrls: ['./manage-billing.component.scss']
})

export class ManageBillingComponent implements OnInit {

    moneda: string;

    constructor() { }

    ngOnInit(): void {
    }
}
