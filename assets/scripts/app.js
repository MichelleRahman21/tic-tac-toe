'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
// const gameEvents = require('./games/events.js')
const authEvents = require('./auth/events.js')
const logic = require('./games/logic.js')
const events = require('./games/events.js')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  logic.addHandlers()
  events.addHandlers()
  authEvents.addHandlers()
})
