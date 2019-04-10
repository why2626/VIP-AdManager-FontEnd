import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { gatherTargetInfoService } from 'src/app/service';

export interface SelectOption {
  id: number,
  name: string
}

@Component({
  selector: 'app-brand-behavior',
  templateUrl: './brand-behavior.component.html',
  styleUrls: ['./brand-behavior.component.scss']
})

export class BrandBehaviorComponent implements OnInit {

  @Output() brand_button_1: EventEmitter<string> = new EventEmitter<string>()
  @Output() brand_button_2: EventEmitter<string> = new EventEmitter<string>()
  @Output() brand_button_3: EventEmitter<string> = new EventEmitter<string>()
  @Output() brand_button_4: EventEmitter<string> = new EventEmitter<string>()
  @Output() brand_button_5: EventEmitter<string> = new EventEmitter<string>()

  btn_1_val : string;
  btn_2_val : string;
  btn_3_val : string;
  btn_4_val : string;
  btn_5_val : string;
  options: SelectOption[];

  branItems: SelectOption[];

  brandBehavior = [
    '品牌最后浏览时间','品牌最后收藏时间','品牌最后购物车放弃时间','品牌最后加入购物车时间','品牌最后购买时间'
  ]

  constructor(private gatherTargetInfoService: gatherTargetInfoService) {
    this.options = [
      {id: 1, name: 'Olay'},
      {id: 2, name: '海飞丝'},
      {id: 3, name: '飘柔'}
      ];
  }

  valButton_1(event: string){
    this.btn_1_val = `${event}`;
    this.brand_button_1.emit(this.btn_1_val)
  }
  valButton_2(event: string){
    this.btn_2_val = `${event}`;
    this.brand_button_2.emit(this.btn_2_val)
  }
  valButton_3(event: string){
    this.btn_3_val = `${event}`;
    this.brand_button_3.emit(this.btn_3_val)
  }
  valButton_4(event: string){
    this.btn_4_val = `${event}`;
    this.brand_button_4.emit(this.btn_4_val)
  }
  valButton_5(event: string){
    this.btn_5_val = `${event}`;
    this.brand_button_5.emit(this.btn_5_val)
  }

  ngOnInit() {
  }
  selectedChange(){
    this.gatherTargetInfoService.brandItems = this.branItems
    this.gatherTargetInfoService.showBrandInfo()
    console.log(this.gatherTargetInfoService.brandItems)
  }
}
