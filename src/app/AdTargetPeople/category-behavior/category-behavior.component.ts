import { Component, OnInit } from '@angular/core';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-category-behavior',
  templateUrl: './category-behavior.component.html',
  styleUrls: ['./category-behavior.component.scss']
})
export class CategoryBehaviorComponent implements OnInit {

  panelOpenState = false
  masterSelected =[];
  public keepOriginalOrder = (a, b) => a.key
  checkedList:any;

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
    ]
  }

  MasterTitles = [
    {id:1, name:'shoe',isMasterSelected:false},
    {id:2, name:'bag',isMasterSelected:false},
    {id:3, name:'womenwear',isMasterSelected:false},
  ]

  public show:boolean = false;
  constructor() {
    //this.getCheckedItemList();
   }

  ngOnInit() {
  }
  isSelectedToggle(ev:Event) {
    ev.stopPropagation();
    this.show = !this.show;
  }

  checkUncheckAll(checklist: KeyValue<string, any>, j:number) {
    var list = checklist.value;
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
      if(list[i].isSelected)
      this.checkedList.push(list[i]);
    }
    this.checkedList = JSON.stringify(this.checkedList);
  }
  step :number;

  setStep(index: number) {
    this.step = index;
  }
}
