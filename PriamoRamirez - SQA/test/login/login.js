var expect = require('chai').expect;
var Login = require('../pageobjects/loginObject');


describe('The Internet - Login Automated Testing', function () {

    it('Verify that is not able to login with invalid password and invalid username', function () {
        Login.open();
        Login.username.setValue('Test');
        Login.password.setValue('Test');
        Login.log();
        expect(Login.flash.getText()).to.contain('Your username is invalid!');
    });

    it('Verify that user is able to login with valid username and password', function () {
        Login.open();
        Login.username.setValue('tomsmith');
        Login.password.setValue('SuperSecretPassword!');
        Login.log();
        expect(Login.flash.getText()).to.contain('You logged into a secure area!');
    });
    it('Verify that user is not able to login with invalid username but valid password', function () {
        Login.open();
        Login.username.setValue('Test');
        Login.password.setValue('SuperSecretPassword!');
        Login.log();
        expect(Login.flash.getText()).to.contain('Your username is invalid!');
    });
    it('Verify that is not able to login with invalid password but valid username', function () {
        Login.open();
        Login.username.setValue('tomsmith');
        Login.password.setValue('Test');
        Login.log();
        expect(Login.flash.getText()).to.contain('Your password is invalid!');
    });
    it('Verify that validation message gets displayed in case user leaves username or password field as blank', function () {
        Login.open();
        Login.username.setValue('');
        Login.password.setValue('');
        Login.log();
        expect(Login.flash.getText()).to.contain('Your username is invalid!');
    });

    it('Verify that after Logging in, you are taken to the correct page.', function () {
        Login.open();
        Login.username.setValue('tomsmith');
        Login.password.setValue('SuperSecretPassword!');
        Login.log();
        expect(Login.flash.getText()).to.contain('You logged into a secure area!');
    });

    it('Verify the user cannot access logged in options without login in.', function () {
        Login.secure();  
        Login.logout();
        Login.open();
        Login.secure();
        expect(Login.flash.getText()).to.contain('You must login to view the secure area!');
    });

    it('Verify you can succesfully log out the aplication.', function () {
        Login.open();
        Login.username.setValue('tomsmith');
        Login.password.setValue('SuperSecretPassword!');
        Login.log();
        Login.logout();
        expect(Login.flash.getText()).to.contain('You logged out of the secure area!');
    });

    

});