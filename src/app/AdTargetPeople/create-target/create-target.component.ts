import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-target',
  templateUrl: './create-target.component.html',
  styleUrls: ['./create-target.component.scss']
})
export class CreateTargetComponent implements OnInit {

  buttons = []


  genderButtons = [
    {name:"女", selected: false},
    {name:"男", selected: false}
  ]

  ageButtons = [
    {name:'60前', selected: false},
    {name:'60后', selected: false},
    {name:'70后', selected: false},
    {name:'80后', selected: false},
    {name:'85后', selected: false},
    {name:'90后', selected: false},
    {name:'95后', selected: false},
    {name:'00后', selected: false},

  ]
  targetName = new FormControl('',[Validators.required])

  constructor() { }

  ngOnInit() {
  }
  singleSelectButton(j: number){
    this.buttons[j].selected = !this.buttons[j].selected;
    for(let i = 0; i < this.buttons.length; i++){
     if(i != j){
       this.buttons[i].selected = false;
     }
    }
  }
//性别多项选择
  genderMultiSelect(j: number){
    this.genderButtons[j].selected = !this.genderButtons[j].selected;
  }
//年龄多项选择
  ageMultiSelect(j: number){
    this.ageButtons[j].selected = !this.ageButtons[j].selected;
  }
  getErrorMessage() {
    return this.targetName.hasError('required') ? '人群名称不能为空' : '';
  }
}
