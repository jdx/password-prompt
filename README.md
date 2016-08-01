# password-prompt

Node cross-platform password prompt.

Supported Environments:

* Unix
* TTY or non-TTY
* cygwin
* Git Bash
* cmd.exe
* PowerShell

# API Reference
prompt -- Prompt for a password

**Returns**: <code>string</code> - input from user  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| message | <code>string</code> |  | message output to user |
| [options] | <code>Object</code> |  |  |
| [options.mask] | <code>Boolean</code> | <code>&#x27;*&#x27;</code> | mask output |
| [options.hide] | <code>Boolean</code> | <code>false</code> | hide output |

**Example**  
```js
let prompt = require('password-prompt')
let password = prompt('password >')
```
