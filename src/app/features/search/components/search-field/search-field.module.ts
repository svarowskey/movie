import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFieldComponent } from './search-field.component';
import { IconModule } from '../../../../shared/components/icon/icon.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SearchFieldComponent],
  imports: [CommonModule, IconModule, ReactiveFormsModule],
  exports: [SearchFieldComponent],
})
export class SearchFieldModule {}
