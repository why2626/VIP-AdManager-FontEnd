import { Component, OnInit, Output, EventEmitter, HostListener } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { gatherAdInfoService } from 'src/app/service/gatherAdInfo';


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

  constructor(private gatherAdInfoService: gatherAdInfoService) { }

  ngOnInit() {
  }

  getErrorMessage() {
    return this.adname.hasError('required') ? '广告名称不能为空' : '';
  }
  startDateInput(ev:Date){
    this.endMinDate = ev

  }
  emiting(){

    if(!this.isLongSet){
      this.isChecked = true
    }

   this.gatherAdInfoService.creatingAd.adName = this.adname.value
   this.gatherAdInfoService.creatingAd.startDate = this.startDate.value
   this.gatherAdInfoService.creatingAd.endDate = this.endDate.value
   this.gatherAdInfoService.creatingAd.isEndDateSet = this.isChecked

   console.log(this.gatherAdInfoService.creatingAd)

  }
}
