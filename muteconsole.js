/*  
    muteconsole 
    By: Acatl Pacheco <acatl.pacheco@gmail.com>
*/
(function() {
    var muteConsole = function(host, enabled, disabled, features) {
        var features = features || ['debug', 'log', 'info', 'warn', 'trace'];
        var i;
        var featureName; 
        var match = function(target, source) {
            for (i = source.length - 1; i >= 0; i--) {
                if (target.indexOf(source[i]) != -1) return true;
            };
        };
        var muteMethods = function() {
            var i;
            for (i = features.length - 1; i >= 0; i--) {
                featureName = features[i];
                window.console[featureName] = function() {};
            }
        };

        if(!window.console) {
            window.console = {};
            muteMethods();
            return true;
        }

        if (match(host, enabled)) return;
        if (match(host, disabled) && console) {
            muteMethods();
        }
        return true;
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