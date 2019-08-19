'use strict'
const store = require('../store.js')

const signUpSuccess = function (data) {
  store.user = data.user
  $('.user-message').text('Signed up successfully!')
  $('form').trigger('reset')
  $('#sign-up').hide()
  $('#sign-in').show()
}

const signUpFailure = function (data) {
  $('.user-message').text('Error on signing up')
  $('form').trigger('reset')
}
const signInSuccess = function (data) {
  store.user = data.user
  $('.user-message').text('Sign in success!')
  $('form').trigger('reset')
  $('#change-your-password').show()
  $('#sign-out').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#new-game').show()
  $('.status').show()
}

const signInFailure = function (data) {
  $('.user-message').text('Sorry! sign in failed')
  $('form').trigger('reset')
}
const changePasswordSuccess = function (data) {
  $('.change-your-password').text('successfully changed password!')
  $('form').trigger('reset')
}
const changePasswordFailure = function (data) {
  $('.change-your-password').text('Error on changing password!')
  $('form').trigger('reset')
}
const signOutSuccess = function () {
  store.user = null

  $('.user-message').text('successfully signed out!')
  $('form').trigger('reset')
  $('#sign-out').hide()
  $('#sign-in').show()
  $('.ui').hide()
  $('#new-game').hide()
  $('.status').hide()
  $('.container').hide()
  $('.game-changes').hide()
  $('.your-turn').hide()
  $('#change-your-password').hide()
  store.oGamesWin = 0
  store.xGamesWin = 0
}
const signOutFailure = function () {
  $('.user-message').text('Sign out failed my dear, try again!')
  $('form').trigger('reset')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
