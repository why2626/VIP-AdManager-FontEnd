import { Injectable } from '@angular/core';
import { userBehavBtn_1 } from '../data/user-behavior-button-1';
import { Observable, of, Subject } from 'rxjs';
import { userBehavBtn_2 } from '../data/user-behavior-button-1';
import { userBehavBtn_5 } from '../data/user-behavior-button-1';
import { userBehavBtn_4 } from '../data/user-behavior-button-1';
import { userBehavBtn_3 } from '../data/user-behavior-button-1';
import { Input, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TargetPeopleService {

  private buttonSelected_1 = new Subject();

  buttonObservable = this.buttonSelected_1.asObservable();

 //发射数据，当调用这个方法的时候，Subject就会发射这个数据，所有订阅了这个Subject的Subscription都会接受到结果
  emitButton_1(selectedButton_1: string){
    this.buttonSelected_1.next(selectedButton_1)
  }

  @Input() bahaviorTitle = [
    '最后浏览时间','最后收藏时间','最后购物车放弃时间','最后加入购物车时间','最后购买时间'
  ];

  //@Output() change: EventEmitter<string> = new EventEmitter<string>()

  //selectedButton_1: string;

  constructor() { }
  getUserBehavBtn_1(): Observable<any>{
    return of(userBehavBtn_1)
  }
  getUserBehavBtn_2(): Observable<any>{
    return of(userBehavBtn_2)
  }
  getUserBehavBtn_3(): Observable<any>{
    return of(userBehavBtn_3)
  }
  getUserBehavBtn_4(): Observable<any>{
    return of(userBehavBtn_4)
  }
  getUserBehavBtn_5(): Observable<any>{
    return of(userBehavBtn_5)
  }

  buttons_1 = userBehavBtn_1;
/*
  singleSelectButton_1(j: number){
    this.buttons_1[j].selected = !this.buttons_1[j].selected;
      for(let i = 0; i < this.buttons_1.length; i++){
        if(i != j){
          this.buttons_1[i].selected = false;
        }
       }
       this.selectedButton_1 = this.bahaviorTitle[0] +'：' + this.buttons_1[j]['name']
       if(!this.buttons_1[j].selected)
       {this.selectedButton_1=''}
      // this.change.emit(this.selectedButton_1);

    }

  sendSingleBtn_1(){
    return "最后浏览时间：" + this.selectedButton_1;
  }*/
}
