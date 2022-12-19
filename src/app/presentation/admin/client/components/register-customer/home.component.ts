import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder ,Validators } from "@angular/forms";

interface ListBox {
  name: string,
  code: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  /**
   * Lista de Moneda
   */
  currency: ListBox[];
  selectedCurrency: any;

  /**
   * Lista de Documento Identidad
   */
  documentType: ListBox[];

  /**
   * Migrar SAP
   */
  migrarSap: boolean = false;

  public form: FormGroup;

  constructor(fb:FormBuilder) { 

    this.form = fb.group({
      typeDocumentIdenty  : [ null, Validators.required ],
      identificationNumber   : [ null, Validators.required ],
      razonSocial             : [ null, Validators.required ],
      telefono                : [ null, Validators.required ],
      nombreComercial         : [ null, Validators.required ],
      typeCurrency                  : [ null, Validators.required ],
      grupoEmpresarial        : [ null ],
      sectorEconomico         : [ null ],
      holding                 : [ null ],
      segmentacion            : [ null ],
      autorizarCuentaFedex    : [ null ],
      migrateSap              : [ false ],
      status                  : [ null ]
    })

    this.currency = [
      { name: 'Sol', code: 'SL' },
      { name: 'Dólar', code: 'DL' }
    ];

    this.documentType = [
      {
        name: 'Documento Nacional de Identidad', code: '0'
      },
      {
        name: 'DNI', code: '1'
      },
      {
        name: 'Carnet de extranjería', code: '4'
      },
      {
        name: 'Pasaporte', code: '5'
      },
    ]
  }

  ngOnInit(): void {
  }

  saveClient() {
    /**
     * Recibir datos de formulário
     */
  }

  showInputSap() {
    return this.form.value.migrateSap
  }

}
