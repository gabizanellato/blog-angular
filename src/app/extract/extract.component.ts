import { AlltransfersService } from './../services/alltransfers.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-extract',
  templateUrl: './extract.component.html',
  styleUrls: ['./extract.component.css']
})
export class ExtractComponent implements OnInit {

  transfers: any[]

  constructor(private service: AlltransfersService) { }

  ngOnInit() {
    // o valor do get é atribuido ao array local de transferencia
    this.transfers = this.service.transfers
  }

}
