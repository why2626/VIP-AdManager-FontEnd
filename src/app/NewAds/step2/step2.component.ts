import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

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
  itemId = new FormControl('',[Validators.required])

  constructor() { }

  ngOnInit() {
  }
  getErrorMessage() {
    return this.itemId.hasError('required') ? '档期id不能为空' : '';
  }
}
