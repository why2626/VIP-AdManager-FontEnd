import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Login/login/login/login.component';
import { HomeComponent } from './home/home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { RegisterComponent } from './Login/register/register/register.component';

const routes: Routes = [
  { path:'', component: HomeComponent, canActivate: [AuthGuard] },
  { path:'login', component:LoginComponent },
  { path: 'register', component: RegisterComponent},

  // otherwise redirect to home
  //{ path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
