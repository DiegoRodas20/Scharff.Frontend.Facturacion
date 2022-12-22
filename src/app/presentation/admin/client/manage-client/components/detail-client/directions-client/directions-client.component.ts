import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { RegisterDirectionComponent } from './components/register-direction/register-direction.component'; 
import { UpdateDirectionComponent } from './components/update-direction/update-direction.component';
import { GetAllDirectionsUsecase } from 'src/app/core/usecase/client/get-all-direction.usecase';

@Component({
  selector: 'app-directions-client',
  templateUrl: './directions-client.component.html',
  styleUrls: ['./directions-client.component.scss'],
  providers: [DialogService]
})

export class DirectionsClientComponent implements OnInit {

  directions: Array<any> = []

  constructor(
    public dialogService: DialogService,
    private _getAllDirection: GetAllDirectionsUsecase
    ){

  }
  ngOnInit() {
    this.getAllDirections();
  }

  getAllDirections(){
    this._getAllDirection.execute().subscribe((value: any)=>{
      this.directions.push(value)
    })
  }

  showModalRegisterDirection(){
    const ref = this.dialogService.open(RegisterDirectionComponent, {
      header: 'Registrar Dirección',
      width: '60rem',
    });
  }

  showModalUpdateDirection(){
    const ref = this.dialogService.open(UpdateDirectionComponent, {
      header: 'Actualizar Dirección',
      width: '60rem',
    });
  }

}
