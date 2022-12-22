import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-credit-line',
  templateUrl: './credit-line.component.html',
  styleUrls: ['./credit-line.component.scss']
})

export class CreditLineComponent implements OnInit {

  constructor(public dialogService: DialogService){

  }
  ngOnInit() {
  }

}
