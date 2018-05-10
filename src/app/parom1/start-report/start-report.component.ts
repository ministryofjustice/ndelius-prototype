import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-start-report',
  templateUrl: './start-report.component.html'
})
export class StartReportComponent implements OnInit, OnDestroy {

  /**
   *
   * @param {ActivatedRoute} activatedRoute
   * @param {Router} router
   */
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    // Empty
  }

  /**
   *
   */
  private continueJourney() {
    this.router.navigate(['parom1/prisoner-details']);
  }

  /**
   *
   */
  startReport() {
    this.continueJourney();
  }

  /**
   *
   */
  ngOnInit() {
    // TODO: Update initial state
  }

  /**
   *
   */
  ngOnDestroy() {
    // TODO:
  }

}
