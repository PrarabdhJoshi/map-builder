import { AppPage } from './app.po';
import {browser, by, element} from 'protractor';


describe('map-builder-ui App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Login Page test', () => {
    browser.get('/login');
    const userEmail = element(by.id('loginEmail')).sendKeys('wingzone@gmail.com');
    const userPassword = element(by.id('loginPassword')).sendKeys('admin');
    const button = element(by.id('loginButton'));
    button.click();

    expect(element.all(by.tagName('tr')).count()).toBe(0);
  });



});
