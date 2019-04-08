import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class gatherTargetInfoService {

  private listener = new Subject<any>()
  public categroItems: any

  listen(): Observable<any>{
    return this.listener.asObservable()
  }
  showTargetInfo(){
    this.listener.next()
  }
}
