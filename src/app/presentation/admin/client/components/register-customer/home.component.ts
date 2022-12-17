import { Component, OnInit } from '@angular/core';


interface Currency {
  name: string,
  code: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  display: boolean = false;

  currency: Currency[];

  selectedCurrency: any;

  nroDocumentoIdentidad: string = '';

  migrarSap: boolean = false;

  autorizarCuentaFedex: boolean = false;

  constructor() { 
    this.currency = [
      {name: 'Sol', code: 'SL'},
      {name: 'Dólar', code: 'DL'}
  ];
  }

  ngOnInit(): void {
  }

  showDialog() {
      this.display = true;
  }

}
