import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { UpdateClientComponent } from '../../update-client/update-client.component';

@Component({
  selector: 'app-information-client',
  templateUrl: './information-client.component.html',
  styleUrls: ['./information-client.component.scss'],
  providers: [DialogService]
})

export class InformationClientComponent implements OnInit {

  constructor(public dialogService: DialogService){

  }
  ngOnInit() {
  }

  showModalUpdateClient() {
    const ref = this.dialogService.open(UpdateClientComponent, {
      header: 'Actualizar Cliente',
      width: '75rem',
  });
  }

}
