import { browser, by, element } from 'protractor';

const fs = require('fs');

export class PrototypePage {

  takeScreenshot() {
    browser.takeScreenshot().then(function (png) {
      let stream = fs.createWriteStream('grab_' + new Date().getTime() + '.png');
      stream.write(new Buffer(png, 'base64'));
      stream.end();
    });
  }

  // Only works with radio-buttons component
  clickRadios(group, count) {
    for (let i = 0, len = count; i < len; i++) {
      this.getElementById(group + '-radio-' + i).click();
    }
  }

  testTextEntry(id: string, text: string) {
    expect(this.setElementByIdValue(id, text)).toEqual(text);
  }

  // Now we have the sticky footer, elements need to be clickable so we scroll to them...
  // We also unfix the header
  scrollToElement(target) {
    browser.controlFlow().execute(function () {
      browser.executeScript('document.querySelector(\'header\').style.position = \'absolute\'');
      browser
        .executeScript('if(document.querySelector(\'.sub-header\')){document.querySelector(\'.sub-header\').style.position=\'absolute\'}');
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

  getElementByClassName(name: string) {
    return element(by.className(name));
  }

  getElementById(id: string) {
    const foundElement = element(by.id(id));
    this.scrollToElement(foundElement);
    return foundElement;
  }
}
