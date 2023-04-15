import { Component, Input, OnInit } from '@angular/core';
import { SidebarMenuItem } from "../../sidebar.types";
import { SidebarService } from "../../sidebar.service";

@Component({
  selector: 'mv-sidebar-menu-item',
  templateUrl: './sidebar-menu-item.component.html',
  styleUrls: ['./sidebar-menu-item.component.scss']
})
export class SidebarMenuItemComponent implements OnInit {

  @Input() item!: SidebarMenuItem;

  constructor(
    public sidebarService: SidebarService
  ) { }

  ngOnInit(): void {
  }

}
