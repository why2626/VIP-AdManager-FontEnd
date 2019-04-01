import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';

import { AppRoutingModule } from './app-routing.module';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { NewadsModule } from './NewAds/newads.module';
import { AdTargetModule } from './AdTargetPeople/ad-target.module';
import { LoginModule } from './Login/login.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { HomeModule } from './home/home.module';
import { TargetDetailsComponent } from './AdTargetPeople/target-details/target-details.component';
import { AddTargetComponent } from './AdTargetPeople/add-target/add-target.component';
import { EditTargetComponent } from './AdTargetPeople/edit-target/edit-target.component';

@NgModule({
  declarations: [
    AppComponent,
    TargetDetailsComponent,
    AddTargetComponent,
    EditTargetComponent,
  ],

  imports: [
    BrowserModule,
    SharedModule,
    CoreModule,
    NewadsModule,
    HomeModule,
    AdTargetModule,
    CdkStepperModule,
    LoginModule,
    HttpClientModule,
    AppRoutingModule,

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
   // fakeBackendProvider      //to switch to a real backend simply remove the providers located below the comment
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
