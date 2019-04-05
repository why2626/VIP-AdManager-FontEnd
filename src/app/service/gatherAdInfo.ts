import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Ad } from '../models/Ad';

@Injectable({ providedIn: 'root' })
export class gatherAdInfoService {

  public creatingAd = new Ad

  showAdInfo(){
    console.log(this.creatingAd)
  }
}
