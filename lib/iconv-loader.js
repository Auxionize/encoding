'use strict';

var Iconv;

try {
    Iconv = require('iconv').Iconv;
} catch (E) {
    // node-iconv not present
}

module.exports = Iconv;
