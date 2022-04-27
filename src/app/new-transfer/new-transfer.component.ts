import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.css']
})
export class NewTransferComponent implements OnInit {


  valor: number;
  destino: number;

  transferir(){
    console.log('hello');
    console.log('valor:' , this.valor);
    console.log('destino: ', this.destino)
  }

  constructor() { }

  ngOnInit(): void {


  }

}

