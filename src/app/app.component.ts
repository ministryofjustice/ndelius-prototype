import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

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

    const pathSuffix: String = ' - Short Format Pre-Sentence Report';

    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .map(() => this.activatedRoute)
      .map(route => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      })
      .filter(route => route.outlet === 'primary')
      .mergeMap(route => route.data)
      .subscribe((event) => {
        this.titleService.setTitle(event['title'] + pathSuffix);
        $.getScript('assets/javascripts/application.js');
        window.scrollTo(0, 0);
      });
  }
}
