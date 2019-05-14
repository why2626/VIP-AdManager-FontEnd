import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { gatherAdInfoService } from 'src/app/service/gatherAdInfo';
import { adFormService } from 'src/app/service/adForm.service';

export interface AdSite{
  id: number;
  value: string;
}
@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss']
})
export class Step2Component implements OnInit {

  selectedAdSite = 1;
  adPuttingSite = "true" ;

  adSites: AdSite[] = [
    {id:1, value:'商品详情页'},
    {id:2, value:'专题页'},
    {id:3, value:'档期页'}
  ]

  stepTwoForm

  constructor(
    private gatherAdInfoService: gatherAdInfoService,
    private adformService: adFormService,
    private formBuilder: FormBuilder) {
      this.stepTwoForm = this.formBuilder.group({
        itemId: ['', Validators.required],
      })
      this.adformService.formTwoReady(this.stepTwoForm)
     }
  ngOnInit() {
  }
  getErrorMessage() {
    return this.stepTwoForm.get('itemId').hasError('required') ? '档期id不能为空' : '';
  }
  emiting(){
    this.gatherAdInfoService.creatingAd.appPoint = '亚麻荨APP' //投放站点
    this.gatherAdInfoService.creatingAd.linkType = this.adSites[this.selectedAdSite-1].value //落地页类型
    this.gatherAdInfoService.creatingAd.linkID = this.stepTwoForm.get('itemId').value //落地页链接
  }
}
