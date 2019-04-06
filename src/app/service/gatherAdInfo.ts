import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Ad } from '../models/Ad';

@Injectable({ providedIn: 'root' })
export class gatherAdInfoService {

  private listener = new Subject<any>()
  public creatingAd = new Ad

  listen(): Observable<any>{
    return this.listener.asObservable()
  }
  showAdInfo(){
    this.listener.next()
  }
}
