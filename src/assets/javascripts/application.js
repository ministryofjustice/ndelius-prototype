(function ($) {

    'use strict';

    $(function () {

        // Show/hide content
        var showHideContent = new GOVUK.ShowHideContent();
        showHideContent.init();

        // Stick at top when scrolling
        GOVUK.stickAtTopWhenScrolling.init();

        // Progressive enhancement for browsers > IE8
        if (!$('html').is('.lte-ie8')) {
            // Autosize all Textarea elements (does not support IE8).
            autosize(document.querySelectorAll('textarea'));

            /**
             * Accessible Datepicker v2.1.5
             * https://github.com/eureka2/ab-datepicker
             */
            $('.date-picker').datepicker({
                weekDayFormat: 'narrow',
                inputFormat: [''],
                outputFormat: 'dd/MM/yyyy',
                daysOfWeekDisabled: [0, 6],
                gainFocusOnConstruction: false
            });
        }

    });

})(window.jQuery);
