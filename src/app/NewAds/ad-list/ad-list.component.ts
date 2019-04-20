import { Component, OnInit } from '@angular/core';
import { Ad } from 'src/app/models';
import { Router } from '@angular/router';
import { AdService } from 'src/app/service';

@Component({
  selector: 'app-ad-list',
  templateUrl: './ad-list.component.html',
  styleUrls: ['./ad-list.component.scss']
})
export class AdListComponent implements OnInit {

  displayedColumns: string[] = ['adName', 'adPrice', 'turnedOn', 'status','spentMoney','exposure','clickCount','clickRate','compativeType','createTime', 'operation'];
  AdDataList: Ad[] = [];
  isLoadingResults = true;
  //dataSource = new MatTableDataSource<Target>(this.data);
 // @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private adService: AdService,private router: Router) { }

  ngOnInit() {  //get list of targets immediately.
    this.adService.getAds()
    .subscribe(res => {
      this.AdDataList = res;
      this.isLoadingResults = false;
      for(let i=0;i<this.AdDataList.length;i++){
        this.AdDataList[i].clickRate = this.toPercent(this.AdDataList[i].clickCount/this.AdDataList[i].exposure)
      }
      console.log(this.AdDataList)
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
   // this.dataSource.paginator = this.paginator;
  }
  toPercent(num){
    return Number(num*100).toFixed(1) + '%'
  }
  deleteAd(_id) {
    this.isLoadingResults = true;
    this.adService.deleteAd(_id)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/adList']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

}
