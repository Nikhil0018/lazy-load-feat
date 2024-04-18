import { Component, OnInit } from '@angular/core';
import { NavigationRouteModel } from '../models/navigation-router.model';
import { navigationRoutes } from 'src/app/core/constants';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public selectedRouteId: number = -1;
  public navigationRoutes: NavigationRouteModel[] = navigationRoutes;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.mapUrlToHeader();
    this.initRouteListener();
  }

  public initRouteListener(): void {
    this.router.events
    .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
    .subscribe((e: RouterEvent) => {
      this.mapUrlToHeader();
    });
  }

  public mapUrlToHeader(): void {
    if (this.router.url == '') {
      this.selectedRouteId = this.navigationRoutes[0].id;
    } else {
      this.navigationRoutes.forEach((route) => {
        if (this.router.url.indexOf(route.routePath) == 0) {
          this.selectedRouteId = route.id;
        }
      });
    }
  }
}
