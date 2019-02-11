import { NgModule } from '@angular/core';
import { CreateTargetComponent } from './create-target/create-target.component';
import { SharedModule } from '../shared/shared.module';
import { adTargetRoutingModule } from './adTarget-routing.module';
import { UserBehaviorComponent } from './user-behavior/user-behavior.component';
import { CategoryBehaviorComponent } from './category-behavior/category-behavior.component';

@NgModule({
  declarations: [
    CreateTargetComponent,
    UserBehaviorComponent,
    CategoryBehaviorComponent],
  imports: [
    SharedModule,
    adTargetRoutingModule
  ]
})
export class AdTargetModule { }
