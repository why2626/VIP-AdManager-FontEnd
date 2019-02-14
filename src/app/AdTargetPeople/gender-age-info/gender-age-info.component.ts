import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gender-age-info',
  templateUrl: './gender-age-info.component.html',
  styleUrls: ['./gender-age-info.component.scss']
})
export class GenderAgeInfoComponent implements OnInit {

  @Output() ageChange: EventEmitter<string> = new EventEmitter<string>()
  @Output() genderChange: EventEmitter<string> = new EventEmitter<string>()


  ageSelectedItems: any;
  genderSelectedItems: any;

  genderButtons = [
    {name:"女", selected: false},
    {name:"男", selected: false}
  ]

  ageButtons = [
    {name:"60前", selected: false},
    {name:"60后", selected: false},
    {name:"70后", selected: false},
    {name:"80后", selected: false},
    {name:"85后", selected: false},
    {name:"90后", selected: false},
    {name:"95后", selected: false},
    {name:"00后", selected: false},

  ]
  constructor() { }

  ngOnInit() {
  }
//性别多项选择
genderMultiSelect(j: number){
  this.genderButtons[j].selected = !this.genderButtons[j].selected;
  this.getSelectedItems()
}
//年龄多项选择
ageMultiSelect(j: number){
  this.ageButtons[j].selected = !this.ageButtons[j].selected;
  this.getSelectedItems()
}

getSelectedItems(){
   this.ageSelectedItems = [];
   this.genderSelectedItems = [];

   for(let i = 0; i<this.ageButtons.length; i++){  //单选不遍历
   if(this.ageButtons[i].selected){
     this.ageSelectedItems.push(this.ageButtons[i]['name'])
   }}
  if(this.ageSelectedItems.length>0){this.ageSelectedItems.unshift('年龄：')}
  this.ageChange.emit(this.ageSelectedItems.join('  '))

   for(let i = 0; i<this.genderButtons.length; i++){
    if(this.genderButtons[i].selected){
      this.genderSelectedItems.push(this.genderButtons[i]['name'])
    }}
    if(this.genderSelectedItems.length>0){this.genderSelectedItems.unshift('性别：')}
    this.genderChange.emit(this.genderSelectedItems.join('  '))
  }

}
