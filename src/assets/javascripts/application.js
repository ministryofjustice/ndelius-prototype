(function ($) {

  'use strict';

  var showHideContent = new GOVUK.ShowHideContent(),
    autoComplete = document.querySelector('.auto-complete');

  showHideContent.init();
  GOVUK.stickAtTopWhenScrolling.init();
  autosize(document.querySelectorAll('textarea'));

  if (!!autoComplete) {
    accessibleAutocomplete.enhanceSelectElement({
      selectElement: autoComplete,
      name: autoComplete.id,
      defaultValue: '',
      required: true
    });
  }

  $('.date-picker').datepicker({
    weekDayFormat: 'narrow',
    inputFormat: [''],
    outputFormat: 'dd/MM/yyyy',
    daysOfWeekDisabled: [0, 6],
    gainFocusOnConstruction: false
  });

})(window.jQuery);
