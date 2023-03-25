import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './components/slider/slider.component';
import { SharedComponentsModule } from '../shared-components.module';



@NgModule({
  declarations: [
    SliderComponent
  ],
  imports: [
    CommonModule,
    SharedComponentsModule
  ],
  exports: [
    SliderComponent
  ]
})
export class SliderModule { }
