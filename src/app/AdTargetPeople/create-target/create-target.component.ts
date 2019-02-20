import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TargetService } from 'src/app/service/target.service';

@Component({
  selector: 'app-create-target',
  templateUrl: './create-target.component.html',
  styleUrls: ['./create-target.component.scss'],
})
export class CreateTargetComponent implements OnInit {


  selectedPlatform = 'iOS';
  buttons = []

  ageSelectedItems: any;
  genderSelectedItems: any;

  userBtn_1: any;
  userBtn_2: any;
  userBtn_3: any;
  userBtn_4: any;
  userBtn_5: any;

  branBtn_1:any;
  branBtn_2:any;
  branBtn_3:any;
  branBtn_4:any;
  branBtn_5:any;

  categBtn_1:any;
  categBtn_2:any;
  categBtn_3:any;
  categBtn_4:any;
  categBtn_5:any;


  targetName = new FormControl('',[Validators.required])
/*
  subscription: Subscription;
  constructor(private targetService:TargetPeopleService) {
     //使用subscribe来订阅，当数据被发射出来的时候,这里就会接收到结果
    this.subscription = this.targetService.buttonObservable
        .subscribe( src => {console.log(src)})
   }
*/
   //销毁的时候需要取消订阅，因为订阅之后会一直处于观察者状态,不取消会导致泄露
   ngOnDestroy() {
  //  this.subscription.unsubscribe();
}

  ngOnInit() {
    //this.singleSeletedBtn_1()
  }
  singleSelectButton(j: number){
    this.buttons[j].selected = !this.buttons[j].selected;
    for(let i = 0; i < this.buttons.length; i++){
     if(i != j){
       this.buttons[i].selected = false;
     }
    }
  }
  getErrorMessage() {
    return this.targetName.hasError('required') ? '人群名称不能为空' : '';
  }
    ageSelectChange(event: string){
      this.ageSelectedItems = `${event}`;
    }
    genderSelectChange(event: string){
      this.genderSelectedItems = `${event}`;
    }
   /* singleSeletedBtn_1(){
      this.selectedItems=this.targetService.sendSingleBtn_1()
    }*/
//-----展示用户行为------
    valUserBtn_1(event: string){
      this.userBtn_1 = `${event}`;
   }
   valUserBtn_2(event: string){
    this.userBtn_2 = `${event}`;
 }
 valUserBtn_3(event: string){
  this.userBtn_3 = `${event}`;
}
valUserBtn_4(event: string){
  this.userBtn_4 = `${event}`;
}
valUserBtn_5(event: string){
  this.userBtn_5 = `${event}`;
}
//-----展示品牌行为------
showBrandBtn_1(event: string){
  this.branBtn_1 = `${event}`
}
showBrandBtn_2(event: string){
  this.branBtn_2 = `${event}`
}
showBrandBtn_3(event: string){
  this.branBtn_3 = `${event}`
}
showBrandBtn_4(event: string){
  this.branBtn_4 = `${event}`
}
showBrandBtn_5(event: string){
  this.branBtn_5 = `${event}`
}
//-----展示类品行为------
showCategoryBtn_1(event: string){
  this.categBtn_1 = `${event}`
}
showCategoryBtn_2(event: string){
  this.categBtn_2 = `${event}`
}
showCategoryBtn_3(event: string){
  this.categBtn_3 = `${event}`
}
showCategoryBtn_4(event: string){
  this.categBtn_4 = `${event}`
}
showCategoryBtn_5(event: string){
  this.categBtn_5 = `${event}`
}

constructor(private targetService: TargetService){
  
}
}
