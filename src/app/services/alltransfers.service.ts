import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AlltransfersService {

  transferList: any [] //tipo array

  constructor() {
    this.transferList = []
  }

  get transfers(){
    return this.transferList
  }

  addNewTransfer(transfer: any){
    this.addDate(transfer)
    this.transferList.push(transfer);
  }

  private addDate(transfer: any){
    transfer.data = new Date
  }

}


