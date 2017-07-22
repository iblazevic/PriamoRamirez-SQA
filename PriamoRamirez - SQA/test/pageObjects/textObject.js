"use strict";
var Page = require('./page.js')


class textObject extends Page {

    get body()  { return browser.element('#tinymce'); }
     
    
    open() {

        super.open('tinymce');
    }

}
module.exports = new textObject();