import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transfer } from '../models/transfers.model'

@Injectable({
  providedIn: 'root'
})

export class AlltransfersService {

  transferList: any [] //tipo array
  private url = "http://localhost:3000/transferencias" // API

  constructor(private httpClient: HttpClient) {
    this.transferList = []
  }

  get transfers(){
    return this.transferList
  }

  transfersList(): Observable<Transfer[]>{
    return this.httpClient.get<Transfer[]>(this.url) // chamando API
  }

  addNewTransfer(transfer: Transfer): Observable<Transfer>{
    this.addDate(transfer)

    return this.httpClient.post<Transfer>(this.url, transfer)
  }


  private addDate(transfer: any){
    transfer.data = new Date
  }

}


