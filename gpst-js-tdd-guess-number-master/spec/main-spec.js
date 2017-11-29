'use strict';
const main = require('../main/main');

describe('guess_number_game', function() {
    var number;
    it ('test1', function() {
        var result = main(1234);
        expect(result).toEqual("0A1B!\n" + "Try again!\n");
    });
    it ('test2', function() {
        var result = main(7503);
        expect(result).toEqual("4A0B!\n" + "You win!\n");
    });
    it ('test3', function() {
        var result = main(8530);
        expect(result).toEqual("1A2B!\n" + "Try again!\n");
    });
});
