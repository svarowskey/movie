import { Injectable } from '@angular/core';
import { SidebarMenuItem } from "./sidebar.types";

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menuList: SidebarMenuItem[] = [];
  libraryList: SidebarMenuItem[] = [];
  generalList: SidebarMenuItem[] = [];

  activeMenuItem!: SidebarMenuItem;

  constructor() {
    this.menuList = [
      {
        id: 0,
        name: 'Home',
        link: '#',
        iconName: 'home'
      },
      {
        id: 1,
        name: 'Discover',
        link: '#',
        iconName: 'discover'
      },
      {
        id: 2,
        name: 'Awards',
        link: '#',
        iconName: 'awards'
      },
      {
        id: 3,
        name: 'Celebrities',
        link: '#',
        iconName: 'celebrities'
      },
    ]

    this.libraryList = [
      {
        id: 4,
        name: 'Recent',
        link: '#',
        iconName: 'recent',
      },
      {
        id: 5,
        name: 'Top Rated',
        link: '#',
        iconName: 'top-rated',
      },
      {
        id: 6,
        name: 'Downloaded',
        link: '#',
        iconName: 'discover',
      },
      {
        id: 7,
        name: 'Playlists',
        link: '#',
        iconName: 'favorite',
      },
      {
        id: 8,
        name: 'Watchlist',
        link: '#',
        iconName: 'add-sidebar',
      },
      {
        id: 9,
        name: 'Completed',
        link: '#',
        iconName: 'completed-sidebar',
      },
    ]

    this.generalList = [
      {
        id: 10,
        name: 'Settings',
        link: '#',
        iconName: 'settings',
      },
      {
        id: 11,
        name: 'Log Out',
        link: '#',
        iconName: 'logout',
      },
    ]

    this.setActiveMenuItem(this.menuList[0]);
  }

  setActiveMenuItem = (item: SidebarMenuItem) => {
    if (this.activeMenuItem) {
      this.activeMenuItem.isActive = false;
    }
    item.isActive = true;
    this.activeMenuItem = item;
  }
}
