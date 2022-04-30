import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { MenuItems } from '../../shared/menu-items/menu-items';

import { PerfectScrollbarConfigInterface, PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';

/** @title Responsive sidenav */
@Component({
  selector: 'app-full-layout',
  templateUrl: 'full.component.html',
  styleUrls: [],
})
export class FullComponent implements OnDestroy {
  mobileQuery: MediaQueryList;

  dir = 'ltr';
  dark = false;
  minisidebar = false;
  boxed = false;
  horizontal = false;

  green = false;
  blue = false;
  danger = false;
  showHide = false;
  url = '';
  sidebarOpened = false;
  status = false;

  public showSearch = false;
  public config: PerfectScrollbarConfigInterface = {};
  // tslint:disable-next-line - Disables all
  private _mobileQueryListener: () => void;

  constructor(
    public router: Router,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    public menuItems: MenuItems,
  ) {
    this.mobileQuery = media.matchMedia('(min-width: 1100px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    // tslint:disable-next-line: deprecation
    this.mobileQuery.addListener(this._mobileQueryListener);
    // this is for dark theme
    // const body = document.getElementsByTagName('body')[0];
    // body.classList.toggle('dark');
    this.dark = false;
    // this.router.routeReuseStrategy.shouldReuseRoute = (e: any) => {
    //   // console.log('okay')
    //   console.log(e._routerState.url.slice(0, 19))
    //   // if(e._routerState.url.slice(0, 19) === '/pages/table/detail') {}
    //   return false;
    // };
  }

  ngOnDestroy(): void {
    // tslint:disable-next-line: deprecation
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  clickEvent(): void {
    this.status = !this.status;
  }

  darkClick() {
    // const body = document.getElementsByTagName('body')[0];
    // this.dark = this.dark;
    const body = document.getElementsByTagName('body')[0];
    body.classList.toggle('dark');
    // if (this.dark)
    // else
    // 	body.classList.remove('dark');
    // this.dark = this.dark;
    // body.classList.toggle('dark');
    // this.dark = this.dark;
  }
}
