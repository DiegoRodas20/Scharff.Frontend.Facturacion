import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { RegisterDirectionComponent } from './components/register-direction/register-direction.component'; 

@Component({
  selector: 'app-directions-client',
  templateUrl: './directions-client.component.html',
  styleUrls: ['./directions-client.component.scss'],
  providers: [DialogService]
})

export class DirectionsClientComponent implements OnInit {

  constructor(public dialogService: DialogService){

  }
  ngOnInit() {
  }

  showModalRegisterDirection(){
    const ref = this.dialogService.open(RegisterDirectionComponent, {
      header: 'Registrar Dirección',
      width: '60rem',
  })
  }

}
