import { Component, OnInit, Output,EventEmitter } from '@angular/core';
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

  @Output() branItemNames: EventEmitter<string> = new EventEmitter<string>()


  btn_1_val : string;
  btn_2_val : string;
  btn_3_val : string;
  btn_4_val : string;
  btn_5_val : string;

  branItems = [];

  brandBehavior = [
    '品牌最后浏览时间','品牌最后收藏时间','品牌最后购物车放弃时间','品牌最后加入购物车时间','品牌最后购买时间'
  ]
  constructor() { }


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
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};

  ngOnInit() {
    this.dropdownList = [
      { item_id: 1, item_text: 'Olay' },
      { item_id: 2, item_text: '海飞丝' },
      { item_id: 3, item_text: '潘婷' },
      { item_id: 4, item_text: '自然堂' },
      { item_id: 5, item_text: '卡姿兰' },
      { item_id: 6, item_text: '迪奥Dior' },
    ];
    this.selectedItems = [
    //  { item_id: 3, item_text: 'Pune' },
    //  { item_id: 4, item_text: 'Navsari' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      unSelectAllText: 'UnSelect All',
      allowSearchFilter: true,
      enableCheckAll:false,
      searchPlaceholderText: "搜索"
    };

  }

  onItemSelect(item: any) {
    console.log(item);
    for(var i=0;i<this.selectedItems.length;i++){
    this.branItems.push(item[i]['item_text']);
    }
  }
  onSelectAll(items: any) {
    console.log(items);
  }

}
