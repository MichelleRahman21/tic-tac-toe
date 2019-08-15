'use strict'
const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  console.log('Submitted sign-up')

  const data = getFormFields(event.target)
  console.log('sign-up data is', data)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}
const onSignIn = function (event) {
  event.preventDefault()
  console.log('Submitted sign-in')

  const data = getFormFields(event.target)
  console.log('sign-in data is', data)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccesS)
    .catch(ui.signOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)// {passwords:{old: new:}} no console.log for passwords
  api.onChangePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}


module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut
}
