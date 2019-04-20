import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { gatherAdInfoService } from 'src/app/service/gatherAdInfo';
import { adFormService } from 'src/app/service/adForm.service';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss']
})
export class Step1Component implements OnInit {

  isLongSet: boolean = true;
  isChecked: boolean = false;
  setTime: string;
  startDate =  new FormControl(new Date());
  endDate = new FormControl(Date);

  minDate = new Date();
  endMinDate = new Date();

  stepOneForm

  constructor(
    private gatherAdInfoService: gatherAdInfoService,
    private adformService: adFormService,
    private formBuilder: FormBuilder) {
      this.stepOneForm = this.formBuilder.group({
        adname: ['', Validators.required],
      })
      this.adformService.formOneReady(this.stepOneForm)
     }

  ngOnInit() {
  }

  getErrorMessage() {
    return this.stepOneForm.get('adname').hasError('required') ? '广告名称不能为空' : '';
  }
  startDateInput(ev:Date){
    this.endMinDate = ev
  }
  emiting(){
    if(!this.isLongSet){
      this.isChecked = true
    }
   this.gatherAdInfoService.creatingAd.adName = this.stepOneForm.get('adname').value
   this.gatherAdInfoService.creatingAd.startDate = this.startDate.value
   this.gatherAdInfoService.creatingAd.endDate = this.endDate.value
   this.gatherAdInfoService.creatingAd.isEndDateSet = this.isChecked
  }

}
