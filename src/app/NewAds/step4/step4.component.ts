import { Component, OnInit } from '@angular/core';
import { gatherAdInfoService } from 'src/app/service/gatherAdInfo';

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
  constructor(private gatherAdInfoService: gatherAdInfoService) { }

  ngOnInit() {
  }

  show(){
    this.adName = this.gatherAdInfoService.creatingAd.adName
    this.isEndDateSet = this.gatherAdInfoService.creatingAd.isEndDateSet
    this.startDate = this.gatherAdInfoService.creatingAd.startDate
    this.endDate = this.gatherAdInfoService.creatingAd.endDate

  }
}
