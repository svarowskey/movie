import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonAddComponent } from './button-add.component';
import { IconModule } from '../../icon/icon.module';

@NgModule({
  declarations: [ButtonAddComponent],
  imports: [CommonModule, IconModule],
  exports: [ButtonAddComponent],
})
export class ButtonAddModule {}
