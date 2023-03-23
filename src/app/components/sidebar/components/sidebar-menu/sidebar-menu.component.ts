import { Component, Input, OnInit } from '@angular/core';
import { SidebarMenuItem } from "../../sidebar.types";

@Component({
  selector: 'mv-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss']
})
export class SidebarMenuComponent implements OnInit {

  @Input() title!: string;
  @Input() list!: SidebarMenuItem[];

  constructor() { }

  ngOnInit(): void {
  }

}
