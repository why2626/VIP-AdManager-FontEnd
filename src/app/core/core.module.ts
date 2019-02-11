import { NgModule,SkipSelf,Optional } from '@angular/core';
import {SharedModule} from '../shared/shared.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
//import { map,combineLatest,merge, filter, debounceTime } from 'rxjs/operators';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [SidenavComponent,HeaderComponent],
  imports: [

    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,



  ],
  exports:[     //要导出才行

    SidenavComponent,
    HeaderComponent,
    SharedModule,
    AppRoutingModule,

  ],
  providers: [
    {provide: 'BASE_CONFIG', useValue:{
      uri: 'http://localhost:4800'
    }}]

})
export class CoreModule {
  constructor(@Optional()@SkipSelf()parent:CoreModule){
    if(parent){  //如果系统已经存在coremodule，抛出异常 核心模块是适合只加载一遍的
      throw new Error('模块已经存在，不能再次加载');
    }
  }
}
