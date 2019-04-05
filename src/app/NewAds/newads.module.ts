import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { Step1Component } from './step1/step1.component';
import { NewadsRoutingModule } from './newads-routing.module'
import { CreateAdComponent } from './create-ad/create-ad.component';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import { Step2Component } from './step2/step2.component';
import { AdPositionListComponent } from './ad-position-list/ad-position-list.component';
import { Step3Component } from './step3/step3.component';
import { Step4Component } from './step4/step4.component';

@NgModule({
  declarations: [
    CreateAdComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    Step4Component,
    AdPositionListComponent

  ],

  imports: [
    SharedModule,
    NewadsRoutingModule,

  ],
  entryComponents:[

  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'zh-CN'},
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
],
})
export class NewadsModule { }
