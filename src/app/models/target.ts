export class Target{
   _id?: string;
   targetName: string; //人群名称
   platform: string; //平台
   gender? : string; //性别
   age? : string;  //年龄
   category?: []; //一二级品类
   brand? : [] //品牌名称
   peopleEstimate?: number;  //人群数量预估
   createTime: Date;
   userBtn_1?: string;
   userBtn_2?: string;
   userBtn_3?: string;
   userBtn_4?: string;
   userBtn_5?: string;
   branBtn_1?: string;
   branBtn_2?: string;
   branBtn_3?: string;
   branBtn_4?: string;
   branBtn_5?: string;
   categBtn_1?: string;
   categBtn_2?: string;
   categBtn_3?: string;
   categBtn_4?: string;
   categBtn_5?: string;
   userId: string;

}
