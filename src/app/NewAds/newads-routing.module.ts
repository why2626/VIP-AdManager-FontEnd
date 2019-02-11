import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CreateAdComponent } from './create-ad/create-ad.component';

const routes: Routes = [
  { path: 'newad', component: CreateAdComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewadsRoutingModule {}
