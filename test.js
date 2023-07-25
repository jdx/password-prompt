'use strict'

const prompt = require('./index')
prompt('hide: ', { method: 'hide' })
  .then(password => {
    console.log(`entered: ${password}`)
    return prompt('notty: ', { method: 'notty' })
  })
  .then(password => {
    console.log(`entered: ${password}`)
    return prompt('mask: ', { method: 'mask' })
  })
  .then(password => {
    console.log(`entered: ${password}`)
  })
  .catch(err => console.error(err.stack))
