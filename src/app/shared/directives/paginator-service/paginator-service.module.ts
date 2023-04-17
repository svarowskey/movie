import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorServiceDirective } from './paginator-service.directive';

@NgModule({
  declarations: [PaginatorServiceDirective],
  exports: [PaginatorServiceDirective],
  imports: [CommonModule],
})
export class PaginatorServiceModule {}
