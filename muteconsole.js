(function() {
    var muteConsole = function(host, enabled, disabled, features) {
        var features = features || ['debug', 'log', 'info', 'warn', 'trace'];
        var match = function(target, source) {
            for (var i = source.length - 1; i >= 0; i--) {
                if (target.indexOf(source[i]) != -1) return true;
            };
        };
        if (match(host, enabled)) return;
        if (match(host, disabled)) {
            if (console) {
                for (var feature in features) {
                    var featureName = features[feature];
                    if (typeof console[featureName] != 'undefined') {
                        console[featureName] = function() {};
                    }
                }
            }
        }
    }
    // AMD compliant
    if (typeof window.define === "function" && window.define.amd) {
        window.define("muteConsole", [], function() {
            return window.muteConsole;
        });
    } else {
        window.muteConsole = muteConsole;
    }
})();