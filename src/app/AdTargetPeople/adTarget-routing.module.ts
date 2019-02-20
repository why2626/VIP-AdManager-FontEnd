import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CreateTargetComponent } from './create-target/create-target.component';
import { TargetListComponent } from './target-list/target-list.component';
import { AddTargetComponent } from './add-target/add-target.component';
import { TargetDetailsComponent } from './target-details/target-details.component';
import { EditTargetComponent } from './edit-target/edit-target.component';

const routes: Routes = [
  { path: 'newtarget', component: CreateTargetComponent },
  { path: 'targets', component: TargetListComponent},
  { path: 'target-details/:id', component: TargetDetailsComponent},
  { path: 'target-add', component: AddTargetComponent },
  { path: 'target-edit/:id', component: EditTargetComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class adTargetRoutingModule {}
