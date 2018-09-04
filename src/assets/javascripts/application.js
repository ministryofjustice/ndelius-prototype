(function () {

  'use strict';

  var showHideContent = new GOVUK.ShowHideContent(),
    autoComplete = document.querySelector('.auto-complete');

  showHideContent.init();
  GOVUK.stickAtTopWhenScrolling.init();
  autosize(document.querySelectorAll('textarea:not(.moj-textarea--classic)'));

  if (!!autoComplete) {
    accessibleAutocomplete.enhanceSelectElement({
      selectElement: autoComplete,
      name: autoComplete.id,
      defaultValue: '',
      required: true
    });
  }

})();
