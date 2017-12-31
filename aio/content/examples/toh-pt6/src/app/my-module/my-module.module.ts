import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './first/first.component';
import { RouterModule } from '@angular/router';
import { MyAnimationComponent } from './my-animation/my-animation.component';
import { ShakeHeadAnimationComponent } from './shake-head-animation/shake-head-animation.component';

export const myModuleModuleRoute = [
  {
    path: '',
    pathMatch: 'full',
    component: FirstComponent,
    // component: MyAnimationComponent,
    // component: ShakeHeadAnimationComponent
  }

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild( myModuleModuleRoute )
  ],
  declarations: [FirstComponent, MyAnimationComponent, ShakeHeadAnimationComponent]
})
export class MyModuleModule {
  constructor() {
    console.info("MyModuleModule constructor");
  }


}
