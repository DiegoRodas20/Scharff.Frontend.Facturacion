import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-detail-client',
    templateUrl: './detail-client.component.html',
    styleUrls: ['./detail-client.component.scss'],
})

export class DetailClientComponent implements OnInit {

    constructor(
        private _router: Router,
    ) { }

    ngOnInit() {
    }

    manageClient(){
        this._router.navigate(['/admin/client'])
    }
}
