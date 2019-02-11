import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {DateAdapter} from '@angular/material/core';


@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss']
})
export class Step1Component implements OnInit {

  isLongSet: boolean = true;
  isChecked: boolean = false;
  setTime: string;
  adname = new FormControl('',[Validators.required])
  startDate =  new FormControl(new Date());
  endDate = new FormControl(Date);

  minDate = new Date();
  endMinDate = new Date();
  constructor(private adapter: DateAdapter<any>) { }

  ngOnInit() {
  }

  getErrorMessage() {
    return this.adname.hasError('required') ? '广告名称不能为空' : '';
  }
  startDateInput(ev:Date){
    this.endMinDate = ev

  }


}
