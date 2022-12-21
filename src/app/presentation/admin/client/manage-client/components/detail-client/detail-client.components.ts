import { Component, EventEmitter, OnInit , Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-client',
  templateUrl: './detail-client.component.html',
  styleUrls: ['./detail-client.component.scss'],
})

export class DetailClientComponent implements OnInit {
    @Output() onClickBack = new EventEmitter();

    constructor(
      private _router: Router,
    ) { }

    ngOnInit() {
    }

    informationClient() {
      this._router.navigate(['/admin/client/'])
  }

}
