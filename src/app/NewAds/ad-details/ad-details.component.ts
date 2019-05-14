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
  appPoint: '', //投放站点
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
  clickRate: '' ,//点击率
  exposure: 0, //曝光量
  clickCount : 0, //点击量
  createTime: null,
  userId:'',
  clickCountPerHour: [], //每小时点击量
  exposurePerHour : [], //每小时曝光量
}
  isLoadingResults = true
  selectedAdId: number
  clickCountPerHour = []//每小时点击量
  exposurePerHour = [] //每小时曝光量

  constructor(private route: ActivatedRoute, private AdService: AdService, private router: Router) { }

  ngOnInit() {
        //Call that function when the component is initiated.
       this.getAdDetails(this.route.snapshot.params['id']);
       this.chartOption

       for(let i=0;i<5;i++){
        this.clickCountPerHour.push(this.RandomNum(1000,3000))
        this.exposurePerHour.push(this.RandomNum(10000,300000))
       }
       for(let i=5;i<11;i++){
        this.clickCountPerHour.push(this.RandomNum(8000,20000))
        this.exposurePerHour.push(this.RandomNum(500000,3000000))
       }
       for(let i=11;i<12;i++){
        this.clickCountPerHour.push(this.RandomNum(3000,8000))
        this.exposurePerHour.push(this.RandomNum(80000,800000))
       }
       this.chartOption.series[0].data = this.exposurePerHour
       this.chartOption.series[1].data = this.clickCountPerHour
  }
  getAdDetails(_id) {
    this.AdService.getAd(_id)
      .subscribe(res => {
        this.ad = res
        this.selectedAdId = this.ad.adPosition[0].id
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
  RandomNum(min, max) {
    return Math.floor(Math.random() * (max - min)) === min  ? (min + 1) : Math.floor(Math.random() * (max - min)) + min
   }

  colors = ['rgb(65,147,136)','rgb(166,71,61)', '#675bba'];

  chartOption = {
    color: this.colors,

    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    grid: {
        right: '20%'
    },
    toolbox: {
        feature: {
            dataView: {show: true, readOnly: false},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    legend: {
        data:['曝光亮(次)','点击量(次)']
    },
    xAxis: [
        {
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            data: ['00:00','02:00','04:00','06:00','08:00','10:00','12:00','14:00','16:00','18:00','20:00','22:00']
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '曝光亮(次)',
            min: 0,
            scale: true,
            position: 'left',
            axisLine: {
                lineStyle: {
                    color: this.colors[0]
                }
            },
            axisLabel: {
                formatter: '{value}'
            }
        },
        {
            type: 'value',
            name: '点击量(次)',
            min: 0,
            scale: true,
            position: 'right',
            axisLine: {
                lineStyle: {
                    color: this.colors[1]
                }
            },
            axisLabel: {
                formatter: '{value}'
            }
        },
    ],
    series: [
        {
            name:'曝光亮(次)',
            type:'line',
            data: []
        },
        {
            name:'点击量(次)',
            type:'line',
            yAxisIndex: 1,
             data: []
        },
    ]
};

}
