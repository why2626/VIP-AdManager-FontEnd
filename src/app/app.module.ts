import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';

import { AppRoutingModule } from './app-routing.module';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { NewadsModule } from './NewAds/newads.module';
import { AdTargetModule } from './AdTargetPeople/ad-target.module';

@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    SharedModule,
    CoreModule,
    NewadsModule,
    AdTargetModule,
    CdkStepperModule,
    AppRoutingModule,
  ],


  bootstrap: [AppComponent]
})
export class AppModule { }
