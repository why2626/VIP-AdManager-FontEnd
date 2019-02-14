import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//import { EventEmitter } from 'events';

@Component({
  selector: 'app-user-behavior',
  templateUrl: './user-behavior.component.html',
  styleUrls: ['./user-behavior.component.scss']
})
export class UserBehaviorComponent implements OnInit {

  @Input() bahaviorTitle = [
    '最后浏览时间','最后收藏时间','最后购物车放弃时间','最后加入购物车时间','最后购买时间'
  ];

  @Output() change: EventEmitter<string> = new EventEmitter<string>()
  selectedButton_1: string;

  buttons_1 = [
    {name:'最近3天', selected: false},
    {name:'最近7天', selected: false},
    {name:'最近30天', selected: false},
    {name:'最近90天', selected: false},
    {name:'最近半年', selected: false},
    {name:'最近一年', selected: false},
  ]
  buttons_2 = [
    {name:'最近3天', selected: false},
    {name:'最近7天', selected: false},
    {name:'最近30天', selected: false},
    {name:'最近90天', selected: false},
    {name:'最近半年', selected: false},
    {name:'最近一年', selected: false},
  ]
  buttons_3 = [
    {name:'最近3天', selected: false},
    {name:'最近7天', selected: false},
    {name:'最近30天', selected: false},
    {name:'最近90天', selected: false},
    {name:'最近半年', selected: false},
    {name:'最近一年', selected: false},
  ]
  buttons_4 = [
    {name:'最近3天', selected: false},
    {name:'最近7天', selected: false},
    {name:'最近30天', selected: false},
    {name:'最近90天', selected: false},
    {name:'最近半年', selected: false},
    {name:'最近一年', selected: false},
  ]
  buttons_5 = [
    {name:'最近3天', selected: false},
    {name:'最近7天', selected: false},
    {name:'最近30天', selected: false},
    {name:'最近90天', selected: false},
    {name:'最近半年', selected: false},
    {name:'最近一年', selected: false},
  ]
  constructor() { }

  ngOnInit() {
  }

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
       this.change.emit(this.selectedButton_1);
    }
    singleSelectButton_2(j: number){
      this.buttons_2[j].selected = !this.buttons_2[j].selected;
        for(let i = 0; i < this.buttons_2.length; i++){
          if(i != j){
            this.buttons_2[i].selected = false;
          }
         }
      }
      singleSelectButton_3(j: number){
        this.buttons_3[j].selected = !this.buttons_3[j].selected;
          for(let i = 0; i < this.buttons_3.length; i++){
            if(i != j){
              this.buttons_3[i].selected = false;
            }
           }
        }
        singleSelectButton_4(j: number){
          this.buttons_4[j].selected = !this.buttons_4[j].selected;
            for(let i = 0; i < this.buttons_4.length; i++){
              if(i != j){
                this.buttons_4[i].selected = false;
              }
             }
          }
          singleSelectButton_5(j: number){
            this.buttons_5[j].selected = !this.buttons_5[j].selected;
              for(let i = 0; i < this.buttons_5.length; i++){
                if(i != j){
                  this.buttons_5[i].selected = false;
                }
               }
            }


  }

