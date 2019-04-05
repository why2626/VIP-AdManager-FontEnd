import { Component, OnInit } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
//import {MatTableDataSource} from '@angular/material';

export interface PeriodicElement {
  id:number;
  position: string,
  picSize: string,
  exposure: string,
  clickRate: string,
  clickCost: number,
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1, position: '首页焦点第三四帧', picSize: "750x300", exposure: "千万级", clickRate: "2.01%", clickCost: 0.98},
  { id: 2, position: '收藏顶部及物流页底部横幅', picSize: "750x156", exposure: "百万级", clickRate: "0.62%", clickCost: 1.77},
  { id: 3, position: '个人设置页顶部轮播', picSize: "720x226", exposure: "千万级", clickRate: "0.59%", clickCost: 2.51},
  { id: 4, position: '优惠券页顶部轮播', picSize: "1065x183", exposure: "十万级", clickRate: "1.03%", clickCost: 1.65},
  { id: 5, position: '美妆频道焦点第二帧', picSize: "750x300", exposure: "十万级", clickRate: "0.52%", clickCost: 0.96},
  { id: 6, position: '美妆频道精彩活动运营位', picSize: "750x300", exposure: "百万级", clickRate: "0.71%", clickCost: 1.82},

]

@Component({
  selector: 'app-ad-position-list',
  templateUrl: './ad-position-list.component.html',
  styleUrls: ['./ad-position-list.component.scss']
})


export class AdPositionListComponent implements OnInit {

  selection = new SelectionModel<PeriodicElement>(true, []);

  selectedAd:PeriodicElement;

  //selectedFile: File

  url :any

  constructor() { }

  ngOnInit() {
  }

  displayedColumns = [ "select", "position", "picSize", "exposure", "clickRate", "clickCost" ];
  dataSource = ELEMENT_DATA;
  //dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  selectedAdPos(selected){
    console.log(selected)
  }
  onFileChanged(event) {
  if (event.target.files && event.target.files[0]) {
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]); // read file as data url
    reader.onload = (event:Event) =>{ // called once readAsDataURL is completed
     this.url = reader.result
    }
   }
  }
  cancelFileUpload(event){
      this.url = ''


  }
}
