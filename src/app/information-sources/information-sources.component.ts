import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-information-sources',
    templateUrl: './information-sources.component.html'
})
export class InformationSourcesComponent {

    reportForm: FormGroup;
    expandContent: Boolean;

    /**
     *
     * @param {Router} router
     * @param {FormBuilder} formBuilder
     */
    constructor(private router: Router, private formBuilder: FormBuilder) {
        this.createForm();
    }

    /**
     *
     */
    private createForm() {
        this.reportForm = this.formBuilder.group({
            interviewInformationSource: void 0,
            serviceRecordsInformationSource: void 0,
            cpsSummaryInformationSource: void 0,
            oasysAssessmentsInformationSource: void 0,
            previousConvictionsInformationSource: void 0,
            victimStatementInformationSource: void 0,
            childrenServicesInformationSource: void 0,
            policeInformationSource: void 0,
            smartToolSource: void 0,
            guidelinesSource: void 0,
            otherInformationSource: void 0,
            otherInformationDetails: ''
        });
    }

    /**
     *
     */
    private continueJourney() {
        this.router.navigate(['offence-details']);
    }

    /**
     *
     */
    onSubmit() {
        this.continueJourney();
    }

}
