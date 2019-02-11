import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CreateTargetComponent } from './create-target/create-target.component';

const routes: Routes = [
  { path: 'newtarget', component: CreateTargetComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class adTargetRoutingModule {}
