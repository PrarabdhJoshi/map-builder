import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  pause()
  {
      browser.driver.sleep(1500);
  }


  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
