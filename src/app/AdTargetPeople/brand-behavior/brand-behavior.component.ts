import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand-behavior',
  templateUrl: './brand-behavior.component.html',
  styleUrls: ['./brand-behavior.component.scss']
})
export class BrandBehaviorComponent implements OnInit {

  brandBehavior = [
    '品牌最后浏览时间','品牌最后收藏时间','品牌最后购物车放弃时间','品牌最后加入购物车时间','品牌最后购买时间'
  ]
  constructor() { }

  ngOnInit() {
  }

}
