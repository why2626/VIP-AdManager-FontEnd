import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-target',
  templateUrl: './create-target.component.html',
  styleUrls: ['./create-target.component.scss']
})
export class CreateTargetComponent implements OnInit {


  selectedPlatform = 'iOS';
  buttons = []

  selectedItems: string;
  ageSelectedItems: any;
  genderSelectedItems: any;


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
  getErrorMessage() {
    return this.targetName.hasError('required') ? '人群名称不能为空' : '';
  }
    selectChange(event: string){
       this.selectedItems = `${event}`;
    }
    ageSelectChange(event: string){
      this.ageSelectedItems = `${event}`;
    }
    genderSelectChange(event: string){
      this.genderSelectedItems = `${event}`;
    }
}
