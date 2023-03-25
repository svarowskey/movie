import { Injectable } from '@angular/core';
import { SidebarMenuItem } from "./sidebar.types";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menuList: SidebarMenuItem[] = [];
  libraryList: SidebarMenuItem[] = [];
  generalList: SidebarMenuItem[] = [];

  activeMenuItem!: SidebarMenuItem;

  constructor(
    private router: Router
  ) {
    this.menuList = [
      {
        id: 0,
        name: 'Главная',
        link: '/',
        iconName: 'home'
      },
      {
        id: 1,
        name: 'Обзор',
        link: '/discover',
        iconName: 'discover'
      },
      {
        id: 2,
        name: 'Награды',
        link: '#',
        iconName: 'awards'
      },
      {
        id: 3,
        name: 'Знаменитые',
        link: '#',
        iconName: 'celebrities'
      },
    ]

    this.libraryList = [
      {
        id: 4,
        name: 'Недавние',
        link: '#',
        iconName: 'recent',
      },
      {
        id: 5,
        name: 'Топ рейтинга',
        link: '#',
        iconName: 'top-rated',
      },
      {
        id: 6,
        name: 'Загруженные',
        link: '#',
        iconName: 'discover',
      },
      {
        id: 7,
        name: 'Избранные',
        link: '#',
        iconName: 'favorite',
      },
      {
        id: 8,
        name: 'Посмотреть',
        link: '#',
        iconName: 'add-sidebar',
      },
      {
        id: 9,
        name: 'Просмотренные',
        link: '#',
        iconName: 'completed-sidebar',
      },
    ]

    this.generalList = [
      {
        id: 10,
        name: 'Настройки',
        link: '#',
        iconName: 'settings',
      },
      {
        id: 11,
        name: 'Выход',
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
    this.router.navigate([ item.link ])
  }
}
