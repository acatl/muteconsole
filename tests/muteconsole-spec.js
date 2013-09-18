'use strict';

describe("muteconsole", function() {
    var element;

    beforeEach(function() {
        window.console = { log: function(){ }};
    });

    it("should be accesible globally", function() {
        expect(window.muteConsole).not.toBeUndefined();
    });

    it("should accept no arguments", function() {
        muteConsole();
        expect(window.console.log).not.toBeUndefined();
    });

    it("should mute if no arguments", function() {
        var muted = muteConsole();
        expect(muted).toBe(true);
    });

    it("if window.console doesnt exist it should create it and mute by default", function() {
        window.console = undefined;
        muteConsole();
        expect(window.console).not.toBeUndefined();
        expect(window.console.log).not.toBeUndefined();
    });

    it("if enabled list is found then do nothing / return false", function() {
        var muted = muteConsole('some.domain.com.local', ['.local']);
        expect(muted).toBe(false);
    });

    it("if enabled list is found and disabled too then do nothing / return false", function() {
        var muted = muteConsole('some.domain.com.local', ['.local'], ['.com']);
        expect(muted).toBe(false);
    });

    it("if enabled and disabled not found then do nothing / return false", function() {
        var muted = muteConsole('some.domain.com.local', ['.dev'], ['.comm']);
        expect(muted).toBe(false);
    });

    it("if enabled not found and disabled IS found then do mute / return true", function() {
        var muted = muteConsole('some.domain.com.local', ['.dev'], ['.com']);
        expect(muted).toBe(true);
    });
});