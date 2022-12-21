import { Component, EventEmitter, OnInit , Output } from '@angular/core';

@Component({
  selector: 'app-detail-client',
  templateUrl: './detail-client.component.html',
  styleUrls: ['./detail-client.component.scss'],
})

export class DetailClientComponent implements OnInit {
  @Output() onClickBack = new EventEmitter();

  ngOnInit() {
  }

}
