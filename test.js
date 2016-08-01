'use strict'

let prompt = require('./index')
prompt('password: ')
.then(password => {
  console.log(`entered: ${password}`)
})
.catch(err => console.error(err.stack))
