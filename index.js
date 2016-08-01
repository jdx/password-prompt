'use strict'

function exec (cmd) {
  let exec = require('child_process').execSync
  exec(cmd, {stdio: 'inherit'})
}

/**
 * prompt -- Prompt for a password
 * @module password-prompt
 * @example
 * let prompt = require('password-prompt')
 * let password = prompt('password: ')
 * @param {string} [ask] - prompt output
 * @returns {Promise<string>} input from user
 */
function prompt (ask) {
  return new Promise((resolve, reject) => {
    exec('stty -echo')
    process.stdin.setEncoding('utf8')
    if (ask) process.stderr.write(ask)
    process.stdin.resume()
    process.stdin.once('data', data => {
      exec('stty echo')
      console.error()
      process.stdin.pause()
      data = data.trim()
      resolve(data === '' ? prompt(ask) : resolve(data))
    })
  })
}

module.exports = prompt
