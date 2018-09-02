# password-prompt

Node cross-platform password prompt.

## Supported Environments:

* Unix
* TTY or non-TTY
* cygwin
* Git Bash
* cmd.exe
* PowerShell
* cmder
* Console2

## API Reference
prompt -- Prompt for a password

**Returns**: <code>Promise.&lt;string&gt;</code> - input from user  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [ask] | <code>string</code> |  | prompt output |
| [options] | <code>Object</code> |  |  |
| [options.method] | <code>string</code> | <code>&quot;mask&quot;</code> | mask / hide / choke |

## Supported masking methods

 * `mask` - Mask your password with \* after Enter (default)
 * `hide` - Mask your password with \* immediately on input
 * `choke` - Do not show any input

## **Example**

```js
let prompt = require('password-prompt')
let password = prompt('password: ')
let password = prompt('password: ', { method: 'mask' })
let password = prompt('password: ', { method: 'hide' })
let password = prompt('password: ', { method: 'choke' })
// password: ******
```

