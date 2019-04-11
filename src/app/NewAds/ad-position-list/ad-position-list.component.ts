import { Component, OnInit } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import { gatherAdInfoService } from 'src/app/service/gatherAdInfo';
import { AdPosition } from 'src/app/models/adPosition'


const ELEMENT_DATA: AdPosition[] = [
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

  selection = new SelectionModel<AdPosition>(true, []);
  selectedAd : AdPosition
  selectedAdId : number
  url :any
  photo

  constructor(private gatherAdInfoService: gatherAdInfoService) { }
  ngOnInit() {
    //预选第一个
    this.selectedAdPos(ELEMENT_DATA[0])
    this.checkChange(ELEMENT_DATA[0])
  }

  displayedColumns = [ "select", "position", "picSize", "exposure", "clickRate", "clickCost" ];
  dataSource = ELEMENT_DATA;

  selectedAdPos(row){
    this.selectedAd = row
    this.selectedAdId = row.id
    this.gatherAdInfoService.creatingAd.adPosition = row
    }
  onFileChanged(event) {
    var fileTypes = [".jpg", ".png",".jpeg"];
    var filePath = event.target.value;
    var fileSize = 0;
    var fileMaxSize = 100; //100kb
    //图片格式验证
    //当括号里面的值为0、空字符、false 、null 、undefined的时候就相当于false
    if(filePath){
        var isNext = false;
        var fileEnd = filePath.substring(filePath.indexOf("."));
        for (var i = 0; i < fileTypes.length; i++) {
            if (fileTypes[i] == fileEnd) {
                isNext = true;
                break;
            }
        }
        if (!isNext){
            console.log('图片格式必须为JPG、PNG或JPEG');
            event.target.value = '';
            return false;
        }
    }else {
        return false;
    }
    //图片大小验证
  if(filePath){
    fileSize =event.target.files[0].size;  //字节为单位   1字节（byte）=1024kb
    var size = fileSize / 1024 ;  //kb为单位
    console.log(fileMaxSize)  //100
    console.log(fileSize)
    console.log(size)
    if (size > fileMaxSize) {
        alert("文件大小不能大于100kb");
        event.target.value = "";
        return false;
    }else if (size <= 0) {
        alert("文件大小不能为0M！");
        event.target.value = "";
        return false;
    }
}else{
    return false;
}
    //图片尺寸验证
    if(filePath){
      //读取图片数据
      var filePic = event.target.files[0];
      var reader = new FileReader();
      reader.onload = function (e) {
          var src  = reader.result.toString();
          //加载图片获取图片真实宽度和高度
          var image = new Image();
          image.onload=function(){

              if (image.width == 750 && image.height == 300){
                  console.log("文件尺寸符合！");
              }else {
                  console.log("文件尺寸应为：720*1280！");
                  event.target.value = '';
                  return false;
              }
          };
          image.src= src;
      };
      reader.readAsDataURL(filePic);
  }else{
      return false;
  }




  //  if (event.target.files && event.target.files[0]) {
  //    var reader = new FileReader();
  //    reader.readAsDataURL(event.target.files[0]); // read file as data url
  //    reader.onload = (event:Event) =>{ // called once readAsDataURL is completed
  //     this.url = reader.result
  //     this.gatherAdInfoService.creatingAd.uploadedImage = this.url
  //    }
  //   }
  }
  cancelFileUpload(event){
      this.url = ''
  }
  checkChange(row){
    this.selection.clear()
    this.selection.select(row)
  }
}
