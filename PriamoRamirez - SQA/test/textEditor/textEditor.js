var expect = require('chai').expect;
var textObject = require('../pageobjects/textObject');
var textMatch;


describe('The Internet - Login Automated Testing', function () {

it('Write text on a frame', function () {
    textObject.open();
    browser.waitForVisible('iframe[id="mce_0_ifr"]');
    var my_frame = $('iframe[id="mce_0_ifr"]').value;
    browser.frame(my_frame);
    browser.setValue("#tinymce","Some Text should be written here");
    
});
it('Match Frame Text', function () {
textMatch = browser.getText("#tinymce");
    expect(textMatch).to.have.string("Some Text should be written here");
    });
});