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

  displayedColumns: string[] = ['adName', 'adPrice', 'turnedOn', 'status', 'operation','spentMoney','exposure','clickCount','clickRate','compativeType','createTime'];
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
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
   // this.dataSource.paginator = this.paginator;
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
