import { Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { HttpClient } from "@angular/common/http";
import { map, Observable, of, shareReplay } from "rxjs";

interface svgInfoItem {
  name: string;
  path: string;
}

interface svgLoadedItem {
  name: string;
  svg: SafeHtml;
}

@Injectable({
  providedIn: 'root'
})
export class IconService {

  private svgArray: svgInfoItem[] = [];
  private svgLoadedArray: svgLoadedItem[] = [];

  constructor(
    private httpClient: HttpClient,
    private sanitizer: DomSanitizer
  ) {
    this.setIcon('add-sidebar', 'assets/sidebar-icons/add-sidebar.svg');
    this.setIcon('awards', 'assets/sidebar-icons/awards.svg');
    this.setIcon('celebrities', 'assets/sidebar-icons/celebrities.svg');
    this.setIcon('completed-sidebar', 'assets/sidebar-icons/completed-sidebar.svg');
    this.setIcon('discover', 'assets/sidebar-icons/discover.svg');
    this.setIcon('favorite', 'assets/sidebar-icons/favorite.svg');
    this.setIcon('home', 'assets/sidebar-icons/home.svg');
    this.setIcon('logout', 'assets/sidebar-icons/logout.svg');
    this.setIcon('recent', 'assets/sidebar-icons/recent.svg');
    this.setIcon('settings', 'assets/sidebar-icons/settings.svg');
    this.setIcon('top-rated', 'assets/sidebar-icons/top-rated.svg');
    this.setIcon('button-add', 'assets/button-icons/button-add.svg');
  }

  public setIcon(name: string, path: string): void {
    const findIcon = this.svgArray.find(icon => icon.name.toLowerCase() === name.toLowerCase());
    if (!findIcon) {
      this.svgArray.push({
        name,
        path
      })
    }
  }

  public getIcon(name: string): Observable<SafeHtml> {
    if (name) {
      const findIcon = this.svgArray.find(icon => icon.name.toLowerCase() === name.toLowerCase());
      if (findIcon) {
        const findLoadedSvg = this.svgLoadedArray.find(svg => svg.name.toLowerCase() === name.toLowerCase());
        console.log('findLoadedSvg', findLoadedSvg);
        if (findLoadedSvg) {
          return of(findLoadedSvg.svg);
        } else {
          return this.httpClient
            .get(findIcon.path, { responseType: 'text' })
            .pipe(
              shareReplay(1),
              map((svgText: string) => {
                this.svgLoadedArray.push({
                  name,
                  svg: this.sanitizer.bypassSecurityTrustHtml(svgText)
                })
                return this.sanitizer.bypassSecurityTrustHtml(svgText)
              })
            )
        }
      }
    }
    return of('');
  }
}
