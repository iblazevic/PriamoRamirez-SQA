"use strict";
var Page = require('./page.js')

class Login extends Page {


    get username()  { return browser.element('#username'); }
    get password()  { return browser.element('#password'); }
    get form()      { return browser.element('#login'); }
    get flash()     { return browser.element('#flash'); }
    
    open() {

        super.open('login');
    }

        secure() {

        super.open('secure');
    }
    
    log() {

        browser.click('#login > button > i')
    }

    logout(){

        browser.click('#content > div > a > i')
    }
    
}
module.exports = new Login();