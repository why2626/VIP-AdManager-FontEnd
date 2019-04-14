import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CreateAdComponent } from './create-ad/create-ad.component';
import { AdListComponent } from './ad-list/ad-list.component';
import { AdDetailsComponent } from './ad-details/ad-details.component';

const routes: Routes = [
  { path: 'newAd', component: CreateAdComponent },
  { path: 'adList', component: AdListComponent},
  { path: 'adDetails/:id', component: AdDetailsComponent},
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewadsRoutingModule {}
