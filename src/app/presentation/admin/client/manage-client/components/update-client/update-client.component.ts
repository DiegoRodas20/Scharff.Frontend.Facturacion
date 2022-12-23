import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
})
export class UpdateClientComponent implements OnInit {

  public isUniqueCode: boolean = true;

  value5: string = 'Disabled';

  public form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      uniqueCode            : [ '12334434', Validators.required ],
      typeDocumentIdenty    : [null, Validators.required],
      identificationNumber  : [null, Validators.required],
      businessName          : [null, Validators.required],
      phone                 : [null, Validators.required],
      tradeName             : [null, Validators.required],
      typeCurrency          : [null, Validators.required],
      businessGroup         : [null],
      economicSector        : [null],
      holding               : [null],
      segmentation          : [null],
      authorizeFedexAccount : [null],
      migrateSap            : [false],
      status                : [null],
      fedexAccount          : [null],
    });
  }

  ngOnInit() {}

  updateClient() {

}

  showInputSap() {
    return this.form.value.migrateSap;
  }
}
