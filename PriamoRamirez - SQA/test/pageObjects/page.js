"use strict";

const assert = require('assert');

class Page {
    open(path) {
        browser.url('/' + path);
        this.openedUrl = path;
    }
}

module.exports = Page;