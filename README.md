muteconsole.js
==============

mute browser's console.log + other console methods

## options

funciton has the form of:
```js
function(host, enabled, disabled, methods) { ... }
```

* **host**     -  `String` target to match against to
* **enabled**  -  `Array` with list of should enable matches ej. ['.local']
* **disabled** -  `Array` with list of should disable matches ej. ['domain.com']
* **methods**  -  `Array` of methods to mute

if there is a match against the `enabled` list the method will exit, if not it will continue to look against `disabled` list.

**Example:**

```js
(function() {
    var enabled  = [".local"];
    var disabled = ["domain.com", "-q"];
    var methods  = ["log", "info"]; // optional

    var host = window.location.host;
    muteConsole(host, enabled, disabled);
})();

// '.local' > exit
// 'domain.local' > exit
// 'domain.com.local' > exit
// 'domain.com' > MUTE CONSOLE
// 'domain-q.com' > MUTE CONSOLE
```