import { Target } from './target';

export class Ad{
  adName: string; //广告名称
  isEndDateSet: boolean;
  startDate: Date;
  endDate: Date;
  vipAPP: string; //投放站点
  adPosition: string; //资源位
  uploadedImage: string; //图片
  linkType: string; //落地页类型
  linkID: string; //落地页链接
  target: Target[]; //人群包
  divices: string; //设备系统
  pricingType: string; //出价方式
  compativeType: string; //竞价方式
  adPrice: number; //广告出价
  dayLimitPrice: number; //日限额

}
