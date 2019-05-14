import { Target } from './target';
import { AdPosition } from './adPosition';

export class Ad{
  _id? : string
  adName: string; //广告名称
  isEndDateSet: boolean; //是否有设置从今天开始长期
  startDate: Date; //投放开始日期
  endDate?: Date; //投放结束日期
  appPoint : string; //投放站点
  adPosition: AdPosition; //资源位
  uploadedImage: string; //图片
  linkType: string; //落地页类型
  linkID: string; //落地页链接
  targets: Target[]; //人群包
  divices: string; //设备系统
  pricingType: string; //出价方式
  compativeType: string; //竞价方式
  adPrice: number; //广告出价
  dayLimitPrice: number; //日限额
  turnedOn?: boolean // 开关
  status? : string //状态
  clickRate?: string //点击率
  exposure?: number //曝光量
  clickCount? : number //点击量
  clickCountPerHour?: number[]//每小时点击量
  exposurePerHour? : number[]//每小时曝光量
  createTime: Date;
  userId: string;
}
