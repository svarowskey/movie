import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MovieInterceptor } from './interceptors/http-interceptor.service';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { SidebarModule } from '../shared/components/sidebar/sidebar.module';
import { RouterModule } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@NgModule({
  declarations: [ClientLayoutComponent],
  imports: [CommonModule, HttpClientModule, RouterModule, SidebarModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MovieInterceptor,
      multi: true,
    },
    FormBuilder,
  ],
})
export class CoreModule {}
