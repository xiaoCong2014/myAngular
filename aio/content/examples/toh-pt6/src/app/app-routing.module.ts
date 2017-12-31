import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import {HeroDetail2Component} from "./hero-detail-2/hero-detail-2.component";
import {MyHighLightComponentComponent} from "./my-high-light-component/my-high-light-component.component";

const routes: Routes = [
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },


  // { path: '', redirectTo: '/myModuleRoute', pathMatch: 'full' },

  { path: '', pathMatch: 'full', component: MyHighLightComponentComponent },



  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },

  { path: 'detail2/:id', component: HeroDetail2Component },


  {
    path: 'myModuleRoute',
    loadChildren: './my-module/my-module.module#MyModuleModule'
  }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],



})
export class AppRoutingModule {}
