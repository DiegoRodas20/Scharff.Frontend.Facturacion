import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-directions-client',
  templateUrl: './directions-client.component.html',
  styleUrls: ['./directions-client.component.scss'],
  providers: [DialogService]
})

export class DirectionsClientComponent implements OnInit {

  constructor(public dialogService: DialogService){

  }
  ngOnInit() {
  }

}
