import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-register-contact-component',
  templateUrl: './register-contact.component.html',
})

export class RegisterContactComponent implements OnInit {


  contacts: any = [];

  constructor(
    public dialogService: DialogService
    ){

  }
  ngOnInit() {}

}
