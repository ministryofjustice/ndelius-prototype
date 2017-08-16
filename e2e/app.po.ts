import { browser, by, element } from 'protractor';

export class PrototypePage {

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
    element(by.id(id)).clear();
    element(by.id(id)).sendKeys(value);
    return element(by.id(id)).getAttribute('value');
  }

  getElementById(id: string) {
    return element(by.id(id));
  }
}
