import { Component, OnInit } from '@angular/core';
import { gatherAdInfoService } from 'src/app/service/gatherAdInfo';
import { Target, Ad } from 'src/app/models';
import { AdPosition } from 'src/app/models/adPosition'
import { AdService } from 'src/app/service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.scss']
})
export class Step4Component implements OnInit {

  adName: string
  startDate: Date
  endDate: Date
  isEndDateSet: boolean
  vipAPP: string //投放站点
  linkType: string //落地页类型
  linkID: string //落地页链接
  device: string //设备系统
  pricingType: string //出价方式
  compativeType: string// 竞价方式
  adPrice: number //广告出价
  dayLimit: number //日限额
  targets: Target[]
  adPosition: AdPosition
  selectedAdId : number
  url: string
  newAd: Ad

  constructor(private gatherAdInfoService: gatherAdInfoService,
     private adService: AdService,
     private router: Router) {
    this.gatherAdInfoService.listen().subscribe(() => {
      this.showAdInfo()  //订阅，step3有定义，点击step3下一步就可以在step4立即显示
    })
   }

  ngOnInit() {
  }
  showAdInfo(){
    this.adName = this.gatherAdInfoService.creatingAd.adName
    this.isEndDateSet = this.gatherAdInfoService.creatingAd.isEndDateSet
    this.startDate = this.gatherAdInfoService.creatingAd.startDate
    this.endDate = this.gatherAdInfoService.creatingAd.endDate
    this.vipAPP = this.gatherAdInfoService.creatingAd.vipAPP
    this.linkType = this.gatherAdInfoService.creatingAd.linkType
    this.linkID = this.gatherAdInfoService.creatingAd.linkID
    this.device = this.gatherAdInfoService.creatingAd.divices
    this.pricingType = this.gatherAdInfoService.creatingAd.pricingType
    this.compativeType = this.gatherAdInfoService.creatingAd.compativeType
    this.adPrice = this.gatherAdInfoService.creatingAd.adPrice
    this.dayLimit = this.gatherAdInfoService.creatingAd.dayLimitPrice
    this.targets = this.gatherAdInfoService.creatingAd.targets
    this.adPosition = this.gatherAdInfoService.creatingAd.adPosition
    this.selectedAdId = this.adPosition.id
    this.url = this.gatherAdInfoService.creatingAd.uploadedImage
    this.newAd = this.gatherAdInfoService.creatingAd
  }
  submitAd(){
    this.adService.addAd(this.newAd)
    .subscribe(res => {
   this.router.navigate(['/ads']);
    }, (err) => {
    console.log(err);
   });

}



}
