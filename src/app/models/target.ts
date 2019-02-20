export class Target{
   _id?: string;
   targetName: string; //人群名称
   platform: string; //平台
   gender? : []; //性别
   age? : [];  //年龄
   userBahavior?: []; //用户行为
   brandBehavior?: []; //品牌行为
   categoryBehavior?: []; //品类行为
   category?: []; //一二级品类
   brand? : [] //品牌名称
   peopleEstimate?: number;  //人群数量预估
   //userId？ token？

}
