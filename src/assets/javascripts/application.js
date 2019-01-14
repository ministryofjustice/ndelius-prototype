(function () {

  'use strict';

  var autoComplete = document.querySelector('.auto-complete');

  autosize(document.querySelectorAll('textarea:not(.moj-textarea--classic)'));

  if (!!autoComplete) {
    accessibleAutocomplete.enhanceSelectElement({
      selectElement: autoComplete,
      name: autoComplete.id,
      defaultValue: '',
      required: true
    });
  }

  // window.GOVUKFrontend.initAll();

})();
