import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-behavior',
  templateUrl: './user-behavior.component.html',
  styleUrls: ['./user-behavior.component.scss']
})
export class UserBehaviorComponent implements OnInit {

  @Input() bahaviorTitle = [
    '最后浏览时间','最后收藏时间','最后购物车放弃时间','最后加入购物车时间','最后购买时间'
  ];

  @Output() userBtn_1: EventEmitter<string> = new EventEmitter<string>()
  @Output() userBtn_2: EventEmitter<string> = new EventEmitter<string>()
  @Output() userBtn_3: EventEmitter<string> = new EventEmitter<string>()
  @Output() userBtn_4: EventEmitter<string> = new EventEmitter<string>()
  @Output() userBtn_5: EventEmitter<string> = new EventEmitter<string>()

  selectedButton_1: string;
  selectedButton_2: string;
  selectedButton_3: string;
  selectedButton_4: string;
  selectedButton_5: string;

  constructor() {}

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

  ngOnInit() {}

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
       this.userBtn_1.emit(this.selectedButton_1);
    }
    singleSelectButton_2(j: number){
      this.buttons_2[j].selected = !this.buttons_2[j].selected;
        for(let i = 0; i < this.buttons_2.length; i++){
          if(i != j){
            this.buttons_2[i].selected = false;
          }
         }
         this.selectedButton_2 = this.bahaviorTitle[1] +'：' + this.buttons_2[j]['name']
         if(!this.buttons_2[j].selected)
         {this.selectedButton_2=''}
         this.userBtn_2.emit(this.selectedButton_2);
      }
      singleSelectButton_3(j: number){
        this.buttons_3[j].selected = !this.buttons_3[j].selected;
          for(let i = 0; i < this.buttons_3.length; i++){
            if(i != j){
              this.buttons_3[i].selected = false;
            }
           }
           this.selectedButton_3 = this.bahaviorTitle[2] +'：' + this.buttons_3[j]['name']
           if(!this.buttons_3[j].selected)
           {this.selectedButton_3=''}
           this.userBtn_3.emit(this.selectedButton_3);
        }
        singleSelectButton_4(j: number){
          this.buttons_4[j].selected = !this.buttons_4[j].selected;
            for(let i = 0; i < this.buttons_4.length; i++){
              if(i != j){
                this.buttons_4[i].selected = false;
              }
             }
             this.selectedButton_4 = this.bahaviorTitle[3] +'：' + this.buttons_4[j]['name']
             if(!this.buttons_4[j].selected)
             {this.selectedButton_4=''}
             this.userBtn_4.emit(this.selectedButton_4);
          }
          singleSelectButton_5(j: number){
            this.buttons_5[j].selected = !this.buttons_5[j].selected;
              for(let i = 0; i < this.buttons_5.length; i++){
                if(i != j){
                  this.buttons_5[i].selected = false;
                }
               }
               this.selectedButton_5 = this.bahaviorTitle[4] +'：' + this.buttons_5[j]['name']
               if(!this.buttons_5[j].selected)
               {this.selectedButton_5=''}
               this.userBtn_5.emit(this.selectedButton_5);
            }
  }

