import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { SidebarMenuComponent } from './components/sidebar-menu/sidebar-menu.component';
import { SidebarMenuItemComponent } from './components/sidebar-menu-item/sidebar-menu-item.component';
import { SidebarLogoComponent } from './components/sidebar-logo/sidebar-logo.component';
import { IconModule } from '../icon/icon.module';

@NgModule({
  declarations: [
    SidebarComponent,
    SidebarMenuComponent,
    SidebarMenuItemComponent,
    SidebarLogoComponent,
  ],
  imports: [CommonModule, IconModule],
  exports: [SidebarComponent],
})
export class SidebarModule {}
