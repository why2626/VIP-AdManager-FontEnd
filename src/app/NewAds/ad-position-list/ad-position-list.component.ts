import { Component, OnInit } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import { gatherAdInfoService } from 'src/app/service/gatherAdInfo';
import { AdPosition } from 'src/app/models/adPosition'

const ELEMENT_DATA: AdPosition[] = [
  { id: 1, position: '首页焦点第三四帧', picSize: "750x300", exposure: "千万级", clickRate: "2.01%", clickCost: 0.98, isSelected: true},
  { id: 2, position: '收藏顶部及物流页底部横幅', picSize: "750x156", exposure: "百万级", clickRate: "0.62%", clickCost: 1.77, isSelected: false},
  { id: 3, position: '个人设置页顶部轮播', picSize: "720x226", exposure: "千万级", clickRate: "0.59%", clickCost: 2.51, isSelected: false},
  { id: 4, position: '优惠券页顶部轮播', picSize: "1065x183", exposure: "十万级", clickRate: "1.03%", clickCost: 1.65, isSelected: false},
  { id: 5, position: '美妆频道焦点第二帧', picSize: "750x300", exposure: "十万级", clickRate: "0.52%", clickCost: 0.96, isSelected: false},
  { id: 6, position: '美妆频道精彩活动运营位', picSize: "750x300", exposure: "百万级", clickRate: "0.71%", clickCost: 1.82, isSelected: false},
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
  picSrc : string = ''
  filePath : string = ''
  uploadVal : string
  alertMessage : string = ''

  PhotoSize = [
    { width: 750, height: 300, size: 100},
    { width: 750, height: 156, size: 100},
    { width: 720, height: 226, size: 100},
    { width: 1065, height: 183, size: 400},
    { width: 750, height: 256, size: 200},
    { width: 720, height: 226, size: 100},
  ]

  constructor(private gatherAdInfoService: gatherAdInfoService) { }
  ngOnInit() {
    //预选第一个
    this.selectedAdPos(ELEMENT_DATA[0])
    this.checkChange(ELEMENT_DATA[0])
  }
  displayedColumns = [ "select", "position", "picSize", "exposure", "clickRate", "clickCost" ];
  dataSource = ELEMENT_DATA

    selectedAdPos(row){
      this.selectedAd = row
      this.selectedAdId = row.id
      this.gatherAdInfoService.creatingAd.adPosition = row
      if(this.picSrc){
        this.reUploadPic()
      }
    }
    checkChange(row){
      this.selection.clear()
      this.selection.select(row)
    }
    //--------------------图片上传----------------------------------
  onFileChanged(event,num) { //num为当前选择的资源位

    var filePath = event.target.value
    this.filePath = filePath

    var fileTypes = [".jpg",".png",".jpeg",".JPG","PNG","JPEG"]
    var fileSize = 0
    var fileMaxSize = this.PhotoSize[num-1].size  //图片最大size
    var width = this.PhotoSize[num-1].width    //图片规定尺寸的宽度
    var height = this.PhotoSize[num-1].height  //图片规定尺寸的高度

    //----------------------图片格式验证-----------------------------
    if(filePath){
        var isNext = false
        var fileEnd = filePath.substring(filePath.indexOf("."))
        for (var i = 0; i < fileTypes.length; i++) {
            if (fileTypes[i] == fileEnd) {
                isNext = true
                break
            }
        }
        if (!isNext){
            this.alertMessage = '图片格式必须为JPG、PNG或JPEG'
            this.picSrc = ''
            event.target.value = ''
            return false
        }
    }else {
        return false;
    }
    //-----------------------图片大小验证---------------------
  if(filePath){
    fileSize = event.target.files[0].size  //字节为单位   1字节（byte）=1024kb
    var size = fileSize / 1024   //kb为单位
    if (size > fileMaxSize) {
        this.alertMessage = "图片大小不能大于"+fileMaxSize+"k, 请重新上传"
        this.picSrc = ''
        event.target.value = ""
        return false
    }else if (size <= 0) {
        this.alertMessage = "图片大小不能为0k, 请重新上传"
        this.picSrc = ''
        event.target.value = ""
        return false
    }
    }else{
        return false;
    }
    //-----------------------图片尺寸验证--------------------
    if(filePath){
      var reader = new FileReader()
      var image = new Image()
      reader.onload = (e) => {  //务必要用箭头函数 才能访问this.picSrc
            var src = reader.result.toString()
            image.src = src
      }
      reader.readAsDataURL(event.target.files[0])
      //加载图片获取图片真实宽度和高度
      image.onload = () => {
        if (image.width == width && image.height == height){
            this.picSrc = image.src
        }else {
            this.picSrc = ''
            event.target.value = ""
            this.alertMessage = "图片尺寸应为"+width+"x"+height+", 请重新上传"
            return false
        }
        this.gatherAdInfoService.creatingAd.uploadedImage = this.picSrc
        this.alertMessage = ''
      }
      }else{
           return false
      }
       this.cancelFileUpload = function(){
         this.picSrc = ''
         event.target.value = ""
         this.gatherAdInfoService.creatingAd.uploadedImage = ''
       }
       this.reUploadPic = function(){
         this.picSrc = ''
         event.target.value = ""
         this.alertMessage = "请重新上传符合尺寸的图片"
       }
  }
  cancelFileUpload(){}
  reUploadPic(){}

  //是否显示错误消息框
  isAlert(){
    if(this.alertMessage){
      setTimeout(() => {
         this.alertMessage = ''
         return false
      }, 5000);
      return true
   }
  }
}
