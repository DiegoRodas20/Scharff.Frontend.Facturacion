import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-contacts-client',
  templateUrl: './contacts-client.component.html',
  styleUrls: ['./contacts-client.component.scss'],
  providers: [DialogService]
})

export class ContactsClientComponent implements OnInit {

  constructor(public dialogService: DialogService){

  }
  ngOnInit() {
  }

}
