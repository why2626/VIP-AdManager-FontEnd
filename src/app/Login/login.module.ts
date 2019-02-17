import { NgModule } from "@angular/core";
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './register/register/register.component';
import { AlertComponent } from './alert/alert/alert.component';
import { SharedModule } from '../shared/shared.module';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  declarations:[
    LoginComponent,
    RegisterComponent,
    AlertComponent,
  ],
  imports:[
    SharedModule,
    LoginRoutingModule
  ],
  exports:[
    AlertComponent,

  ]

})
export class LoginModule{}
