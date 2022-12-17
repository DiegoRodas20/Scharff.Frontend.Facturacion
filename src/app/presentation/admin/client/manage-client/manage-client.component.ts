import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { HomeComponent } from '../components/register-customer/home.component';

@Component({
    selector: 'app-manage-client',
    templateUrl: './manage-client.component.html',
    styleUrls: [ './manage-client.component.scss'],
    providers: [ DialogService ]

})
export class ManageClientComponent implements OnInit {

    constructor(public dialogService: DialogService) { }

    ngOnInit(): void {
    }

    showModalClient() {
        const ref = this.dialogService.open(HomeComponent, {
            header: 'Registrar Cliente',
            width: '75%'
        });
    }
}
