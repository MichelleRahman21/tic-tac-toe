'use strict'
const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}
const onSignIn = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)// {passwords:{old: new:}} no console.log for passwords
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onNeedToSignUp = function (event) {
  event.preventDefault()
  $('#sign-in').hide()
  $('#sign-up').show()
}

const onNeedToSignIn = function (event) {
  event.preventDefault()
  $('#sign-up').hide()
  $('#sign-in').show()
}

const clearUserMessages = function (event) {
  $('.user-message').text('')
  $('.change-your-password').text('')
}
// const onNeedToChangePassword = function (event) {
//   event.preventDefault()
//   $('#changePassword').hide()
//   $('#changePassword').show()
// }
const addHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut).hide()
  $('#sign-in').hide()
  $('.sign-in-link').on('click', onNeedToSignIn)
  $('.sign-up-link').on('click', onNeedToSignUp)
  $('#change-your-password').hide()
  // $('#changePassword').show()
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onNeedToSignIn,
  clearUserMessages,
  onNeedToSignUp,
  addHandlers
}
