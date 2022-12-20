import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { RegisterClientComponent } from './components/register-client/register-client.component';

@Component({
    selector: 'app-manage-client',
    templateUrl: './manage-client.component.html',
    styleUrls: ['./manage-client.component.scss'],
    providers: [DialogService]
})

export class ManageClientComponent implements OnInit {

    isVisibleDetailClient = false;

    constructor(public dialogService: DialogService) { }

    ngOnInit() {
    }

    showModalClient() {
        const ref = this.dialogService.open(RegisterClientComponent, {
            header: 'Registrar Cliente',
            width: '75rem',
        });
    }

    showDetailClient() {
        this.isVisibleDetailClient = true;
    }
}
