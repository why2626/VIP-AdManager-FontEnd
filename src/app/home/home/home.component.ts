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
    }

    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.currentUserSubscription.unsubscribe();
    }

    numFormat(num) {
      var number = (num.toString().indexOf ('.') !== -1) ? num.toLocaleString() : num.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
      return number;
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
              max: 250,
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
              max: 250,
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
              data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
          },
          {
              name:'点击量(次)',
              type:'line',
              yAxisIndex: 1,
              data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
          },
      ]
  };


}
