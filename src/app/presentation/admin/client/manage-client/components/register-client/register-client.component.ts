import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-register-client',
    templateUrl: './register-client.component.html',
})

export class RegisterClientComponent implements OnInit {

    formClient: FormGroup;

    constructor(
        private _formBuilder: FormBuilder
    ) { }

    ngOnInit() {
        this.createFormClient()
    }

    createFormClient() {
        this.formClient = this._formBuilder.group({
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
        })
    }


    registerClient() {

        if (this.formClient.invalid) {
            this.formClient.markAllAsTouched()
            return
        }
        
    }

    showInputSap() {
        return this.formClient.value.migrateSap;
    }
}
