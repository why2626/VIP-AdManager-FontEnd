import { NgModule } from '@angular/core';
import { CreateTargetComponent } from './create-target/create-target.component';
import { SharedModule } from '../shared/shared.module';
import { adTargetRoutingModule } from './adTarget-routing.module';
import { UserBehaviorComponent } from './user-behavior/user-behavior.component';
import { CategoryBehaviorComponent } from './category-behavior/category-behavior.component';
import { BrandBehaviorComponent } from './brand-behavior/brand-behavior.component';
import { GenderAgeInfoComponent } from './gender-age-info/gender-age-info.component';
import { TargetListComponent } from './target-list/target-list.component';

@NgModule({
  declarations: [
    CreateTargetComponent,
    UserBehaviorComponent,
    CategoryBehaviorComponent,
    BrandBehaviorComponent,
    GenderAgeInfoComponent,
    TargetListComponent
  ],
  imports: [
    SharedModule,
    adTargetRoutingModule
  ]
})
export class AdTargetModule { }
