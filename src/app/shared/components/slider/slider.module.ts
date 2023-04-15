import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './components/slider/slider.component';
import { IconModule } from '../icon/icon.module';
import { ButtonAddModule } from '../buttons/button-add/button-add.module';
import { ButtonWatchNowModule } from '../buttons/button-watch-now/button-watch-now.module';

@NgModule({
  declarations: [SliderComponent],
  imports: [CommonModule, IconModule, ButtonAddModule, ButtonWatchNowModule],
  exports: [SliderComponent],
})
export class SliderModule {}
