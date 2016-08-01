# password-prompt

Node cross-platform password prompt.

Supported Environments:

* Unix
* TTY or non-TTY
* cygwin
* Git Bash
* cmd.exe
* PowerShell
* cmder
* Console2

# API Reference
prompt -- Prompt for a password

**Returns**: <code>Promise.&lt;string&gt;</code> - input from user  

| Param | Type | Description |
| --- | --- | --- |
| [ask] | <code>string</code> | prompt output |
| [options] | <code>Object</code> |  |

**Example**  
```js
let prompt = require('password-prompt')
let password = prompt('password: ')
// password: ******
```
