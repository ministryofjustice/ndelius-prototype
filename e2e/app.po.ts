import { browser, by, element } from 'protractor';

export class PrototypePage {

  // Now we have the sticky footer, elements need to be clickable so we scroll to them...
  scrollToElement(target) {
    browser.controlFlow().execute(function() {
      browser.executeScript('arguments[0].scrollIntoView(true)', target.getWebElement());
    });
  }

  navigateTo() {
    return browser.get('/');
  }

  getDateToday() {
    function zero(num: number): string {
      return num < 10 ? '0' + num : num.toString();
    }

    const today: Date = new Date();
    return zero(today.getDate()) + '/' + zero(today.getMonth() + 1) + '/' + today.getFullYear();
  }

  getHeadingText() {
    return element(by.css('app-root h1')).getText();
  }

  getSubHeadingText() {
    return element.all(by.css('app-root h2')).first().getText();
  }

  getCloseButton() {
    return element(by.id('closeButton'));
  }

  getNextButton() {
    return element(by.id('nextButton'));
  }

  getElementByIdText(id: string) {
    return element(by.id(id)).getText();
  }

  getElementByIdValue(id: string) {
    return element(by.id(id)).getAttribute('value');
  }

  setElementByIdValue(id: string, value: string) {
    const foundElement = this.getElementById(id);
    foundElement.clear();
    foundElement.sendKeys(value);
    return foundElement.getAttribute('value');
  }

  changeSelectOption(id: string, value: string) {
    const foundElement = this.getElementById(id);
    foundElement.element(by.cssContainingText('option', value)).click();
    return foundElement.getAttribute('value');
  }

  getElementById(id: string) {
    const foundElement = element(by.id(id));
    this.scrollToElement(foundElement);
    return foundElement;
  }
}
