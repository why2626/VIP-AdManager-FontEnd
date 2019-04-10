import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class gatherTargetInfoService {

  private listener = new Subject<any>()
  private brandlistener = new Subject<any>()

  public categroItems: any
  public brandItems: any

  listen(): Observable<any>{
    return this.listener.asObservable()
  }
  showTargetInfo(){
    this.listener.next()
  }
  brandListen(): Observable<any>{
    return this.brandlistener.asObservable()
  }
  showBrandInfo(){
    this.brandlistener.next()
  }
}
