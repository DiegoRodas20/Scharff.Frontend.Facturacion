import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-update-contact-component',
  templateUrl: './update-contact.component.html',
})

export class UpdateContactComponent implements OnInit {


  contacts: any = [];

  constructor(
    public dialogService: DialogService
    ){

  }
  ngOnInit() {}

}
