import { Component, OnInit } from '@angular/core';
import { AdPosition, Target, Ad } from 'src/app/models';
import { ActivatedRoute, Router } from '@angular/router';
import { AdService } from 'src/app/service/Ad.service';

@Component({
  selector: 'app-ad-details',
  templateUrl: './ad-details.component.html',
  styleUrls: ['./ad-details.component.scss']
})
export class AdDetailsComponent implements OnInit {


ad : Ad = {
  _id : '',
  adName: '', //广告名称
  isEndDateSet: true, //是否有设置从今天开始长期
  startDate: null, //投放开始日期
  endDate: null, //投放结束日期
  vipAPP: '', //投放站点
  adPosition: null, //资源位
  uploadedImage: '', //图片
  linkType: '', //落地页类型
  linkID: '', //落地页链接
  targets: null, //人群包
  divices: '', //设备系统
  pricingType: '', //出价方式
  compativeType: '', //竞价方式
  adPrice: 0, //广告出价
  dayLimitPrice: 0, //日限额
  turnedOn: false, // 开关
  status : '', //状态
  spentMoney: 0 ,//花费
  exposure: 0, //曝光量
  clickCount : 0, //点击量
  createTime: null,
  userId:'',
}
  isLoadingResults = true
  selectedAdId: number

  constructor(private route: ActivatedRoute, private AdService: AdService, private router: Router) { }

  ngOnInit() {
        //Call that function when the component is initiated.
       this.getAdDetails(this.route.snapshot.params['id']);
  }
  getAdDetails(_id) {
    this.AdService.getAd(_id)
      .subscribe(res => {
        this.ad = res
        this.selectedAdId = this.ad.adPosition[0].id
        console.log(this.ad.adPosition)
        console.log(this.selectedAdId)
        this.isLoadingResults = false
      }, err => {
        console.log(err)
        this.isLoadingResults = false
      });
  }
  deleteAd(_id) {
    this.isLoadingResults = true
    this.AdService.deleteAd(_id)
      .subscribe(res => {
          this.isLoadingResults = false
          this.router.navigate(['/adList'])
        }, (err) => {
          console.log(err)
          this.isLoadingResults = false
        }
      );
  }
  goBack(){
    this.isLoadingResults = true
    history.back()
  }

}
