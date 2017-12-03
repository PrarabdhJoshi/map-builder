import { AppPage } from './app.po';
import {browser, by, element} from 'protractor';


describe('map-builder-ui App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Signup Page test', () => {
    browser.get('/signup');
    const usersignupEmail = element(by.id('signupEmail')).sendKeys('test@gmail.com');
    const usersignupPassword = element(by.id('signupPassword')).sendKeys('testuser123');
    const usersignupconfirmPassword = element(by.id('signupconfirmPassword')).sendKeys('testuser123');
    const signupbutton = element(by.id('signupButton'));
    signupbutton.click();

    expect(element.all(by.tagName('tr')).count()).toBe(0);
  });

  it('Login Page Failure test', () => {
    browser.get('/login');
    const userEmail = element(by.id('loginEmail')).sendKeys('Bharath@gmail.com');
    const userPassword = element(by.id('loginPassword')).sendKeys('testuser123');
    const button = element(by.id('loginButton'));
    button.click();

    expect(element.all(by.tagName('tr')).count()).toBe(0);
  });


  it('Login Page Success test', () => {
    browser.get('/login');
    const userEmail = element(by.id('loginEmail')).sendKeys('test@gmail.com');
    const userPassword = element(by.id('loginPassword')).sendKeys('testuser123');
    const button = element(by.id('loginButton'));
    button.click();

    expect(element.all(by.tagName('tr')).count()).toBe(0);
  });



  it('Home Page test', () => {
    browser.get('/login');
    const userEmail = element(by.id('loginEmail')).sendKeys('test@gmail.com');
    const userPassword = element(by.id('loginPassword')).sendKeys('testuser123');
    const button = element(by.id('loginButton'));
    button.click();

    const radiobuttonLocation = element(by.id('locationButton'));
    radiobuttonLocation.click();
    const radiobuttonName = element(by.id('nameButton'));
    radiobuttonName.click();
    const venue = element(by.id('venueInput')).sendKeys('Macys Restaurant');
    
    expect(element.all(by.tagName('tr')).count()).toBe(0);
  });

/*
  it('Map Page test', () => {
    browser.get('/map');
    const userEmail = element(by.id('loginEmail')).sendKeys('test@gmail.com');
    const userPassword = element(by.id('loginPassword')).sendKeys('testuser123');
    const button = element(by.id('loginButton'));
    button.click();

    const radiobuttonLocation = element(by.id('locationButton'));
    radiobuttonLocation.click();
    const radiobuttonName = element(by.id('nameButton'));
    radiobuttonName.click();
    const venue = element(by.id('venueInput')).sendKeys('Macys Restaurant');
    

    expect(element.all(by.tagName('tr')).count()).toBe(0);
  });
  */




});
