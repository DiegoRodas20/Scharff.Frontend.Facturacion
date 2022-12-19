import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
})
export class RegisterClientComponent implements OnInit {
  public form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      typeDocumentIdenty: [null, Validators.required],
      identificationNumber: [null, Validators.required],
      businessName: [null, Validators.required],
      phone: [null, Validators.required],
      tradeName: [null, Validators.required],
      typeCurrency: [null, Validators.required],
      businessGroup: [null],
      economicSector: [null],
      holding: [null],
      segmentation: [null],
      authorizeFedexAccount: [null],
      migrateSap: [false],
      status: [null],
      fedexAccount: [null],
    });
  }

  ngOnInit() {}

  saveClient() {}

  showInputSap() {
    return this.form.value.migrateSap;
  }
}
