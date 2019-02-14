import { Component, OnInit } from '@angular/core';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-category-behavior',
  templateUrl: './category-behavior.component.html',
  styleUrls: ['./category-behavior.component.scss']
})
export class CategoryBehaviorComponent implements OnInit {

  categoryBehavior = [
    '品类最后浏览时间','品类最后收藏时间','品类最后购物车放弃时间','品类最后加入购物车时间','品类最后购买时间'
  ]
  panelOpenState = false
  masterSelected =[];
  public keepOriginalOrder = (a, b) => a.key
  checkedList =[];
  allCheckedList = [];
  selectedItems :string;

  checkListObject: {[key: string]: any} = {
    '鞋': [
      {id: 1, name:'女式鞋',isSelected:false},
      {id: 2, name:'男式鞋',isSelected:false},
      {id: 3, name:'鞋类配件',isSelected:false},
    ],
    '箱包': [
      {id: 1, name: '男包', isSelected:false},
      {id: 2, name: '女包', isSelected:false},
      {id: 3, name: '功能箱包', isSelected:false},
      {id: 4, name: '配件', isSelected:false},
    ],
    '女装': [
      {id: 1, name: '女上装', isSelected:false},
      {id: 2, name: '女下装', isSelected:false},
      {id: 3, name: '女配饰', isSelected:false},
      {id: 4, name: '裙装', isSelected:false},
      {id: 5, name: '礼服套装', isSelected:false},
    ],
    '男装': [
      {id: 1, name: '男上装', isSelected:false},
      {id: 2, name: '男下装', isSelected:false},
      {id: 3, name: '内衣/家居服', isSelected:false},
      {id: 4, name: '男配饰', isSelected:false},
    ],
    '护肤': [
      {id: 1, name: '面部护理', isSelected:false},
      {id: 2, name: '眼部护理', isSelected:false},
      {id: 3, name: '颈部护理', isSelected:false},
      {id: 4, name: '精油护理', isSelected:false},
      {id: 5, name: '男士护理', isSelected:false},
      {id: 6, name: 'T区护理', isSelected:false},
      {id: 7, name: '唇部护理', isSelected:false},
    ],
    '彩妆': [
      {id: 1, name: '眼妆', isSelected:false},
      {id: 2, name: '颊装', isSelected:false},
      {id: 3, name: '唇装', isSelected:false},
      {id: 4, name: '美甲', isSelected:false},
      {id: 5, name: '彩妆工具', isSelected:false},
      {id: 6, name: '香水香薰', isSelected:false},
    ],
    '家用电器': [
      {id: 1, name: '厨房电器', isSelected:false},
      {id: 2, name: '生活电器', isSelected:false},
      {id: 3, name: '个人护理家电', isSelected:false},
      {id: 4, name: '大家电', isSelected:false},
    ],
    '建材家装': [
      {id: 1, name: '灯饰照明', isSelected:false},
      {id: 2, name: '厨房卫浴', isSelected:false},
      {id: 3, name: '墙地面材料', isSelected:false},
      {id: 4, name: '五金工具', isSelected:false},
      {id: 5, name: '浴室卫浴', isSelected:false},
    ],
    '首饰配饰': [
      {id: 1, name: '烟具', isSelected:false},
      {id: 2, name: '珠宝饰品', isSelected:false},
      {id: 3, name: '钟表', isSelected:false},
      {id: 4, name: '眼镜', isSelected:false},
      {id: 5, name: '饰品', isSelected:false},
      {id: 6, name: '刀具', isSelected:false},
      {id: 7, name: '精品', isSelected:false},
    ],
    '日用家居': [
      {id: 1, name: '个人用品', isSelected:false},
      {id: 2, name: '家饰软装', isSelected:false},
      {id: 3, name: '收纳用品', isSelected:false},
      {id: 4, name: '卫浴用品', isSelected:false},
      {id: 5, name: '纸品', isSelected:false},
      {id: 6, name: '保暖护具', isSelected:false},
      {id: 7, name: '清洁工具', isSelected:false},
      {id: 8, name: '洗晒熨烫', isSelected:false},
      {id: 9, name: '衣物清洁', isSelected:false},
      {id: 10, name: '家庭清洁', isSelected:false},
      {id: 11, name: '除醛祛味', isSelected:false},
      {id: 12, name: '园艺用品', isSelected:false},
      {id: 13, name: '文创礼品', isSelected:false},
      {id: 14, name: '香薰蜡烛', isSelected:false},
      {id: 15, name: '毛巾浴衣', isSelected:false},
    ],
  }

  constructor() {
    //this.getCheckedItemList();
    //this.checkedList = [];
   }

  ngOnInit() {
  }

  checkUncheckAll(checklist: KeyValue<string, any>, j:number) {
    var list = checklist.value;  //当前masterselect下的几条对象
    for (var i = 0; i < list.length; i++) {
      list[i].isSelected = this.masterSelected[j];
    }
    this.getCheckedItemList(checklist);
  }

  isAllSelected(checklist: KeyValue<string, any>, j:number) {
    var list = checklist.value;
    this.masterSelected[j] = list.every(function(item:any) {
        return item.isSelected == true;
      })
    this.getCheckedItemList(checklist);
  }

  getCheckedItemList(checklist: KeyValue<string, any>){
    var list = checklist.value;
    this.checkedList = [];
    for (var i = 0; i < list.length; i++) {
        //!(list[i].name in this.checkedList)
        if (list[i].isSelected)
        this.checkedList.push(list[i].name);
    }

    //this.allCheckedList.push(this.checkedList)

    this.selectedItems = JSON.stringify(this.checkedList);
  }

  step :number;

  setStep(index: number) {
    this.step = index;
  }
  applyFilter(filterValue: string) {
    this.checkListObject.value.filter = filterValue.trim().toLowerCase();
  }
}
/*this.checkedList.forEach(function(value){
  if (list[i].name.indexOf(value)==-1 && list[i].isSelected)
  this.checkedList.push(list[i].name);
})*/
