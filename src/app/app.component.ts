import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { filter, map, mergeMap } from 'rxjs/operators';

declare const $: any;
declare const jquery: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  /**
   * @constructor
   * @param {Router} router
   * @param {ActivatedRoute} activatedRoute
   * @param {Title} titleService
   */
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private titleService: Title) {
    // Empty
  }

  /**
   *
   */
  ngOnInit() {

    const pathSuffix: String = ' - Prototype';

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .pipe(map(() => this.activatedRoute))
      .pipe(map(route => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      })).pipe(filter(route => route.outlet === 'primary'))
      .pipe(mergeMap(route => route.data))
      .subscribe((event) => {
        this.titleService.setTitle(event['title'] + pathSuffix);
        $.getScript('assets/javascripts/application.js');
        window.scrollTo(0, 0);
      });
  }
}
