import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

import { AuthenticationService } from 'src/app/service/authentication.service';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/models/user';
import { ElementSchemaRegistry } from '@angular/compiler';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
    @ViewChild('chart') chart: ElementRef

    myChart

    currentUser: User;
    currentUserSubscription: Subscription;
    users: User[] = [];
    todayCost = this.numFormat(6849)
    clickCountPerHour = []//每小时点击量
    exposurePerHour = [] //每小时曝光量


    constructor(
        private authenticationService: AuthenticationService,
        private userService: UserService
    ) {
        this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
            this.currentUser = user;
            this.currentUser.balance = this.numFormat(this.currentUser.balance)
        });
    }

    ngOnInit() {
      this.chartOption

      for(let i=0;i<5;i++){
       this.clickCountPerHour.push(this.RandomNum(10000,30000))
       this.exposurePerHour.push(this.RandomNum(100000,3000000))
      }
      for(let i=5;i<11;i++){
       this.clickCountPerHour.push(this.RandomNum(80000,200000))
       this.exposurePerHour.push(this.RandomNum(5000000,30000000))
      }
      for(let i=11;i<12;i++){
       this.clickCountPerHour.push(this.RandomNum(30000,80000))
       this.exposurePerHour.push(this.RandomNum(800000,8000000))
      }
      this.chartOption.series[0].data = this.exposurePerHour
      this.chartOption.series[1].data = this.clickCountPerHour

    }

    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.currentUserSubscription.unsubscribe();
    }

    numFormat(num) {
      var number = (num.toString().indexOf ('.') !== -1) ? num.toLocaleString() : num.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
      return number;
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
