import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { Store } from '@ngrx/store';

import { getCurrentState, IState } from './_shared/reducer/state.reducers';

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
   * @param {Store<IState>} store
   */
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private titleService: Title, private store: Store<IState>) {
    // Empty
  }

  /**
   * @FIXME: Remove this.
   */
  private checkState() {
    this.store.select(getCurrentState).subscribe(state => {
      console['info']('Updated state:', state);
    });
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
        this.checkState(); // @FIXME: Remove this
      });
  }
}
