'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const gameEvents = require('./games/events.js')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  $('.box').on('click', gameEvents.onClickBox)

  //  $('#get-book').on('submit',gameEvents.onSignUp);
  //  $('#delete-book').on('submit',gameEvents.onChangePassword);
  //  $('#update-book').on('submit',gameEvents.onSignOut);
  //   $('#get-book').on('submit',gameEvents.onGetGames);
  //   $('#delete-book').on('submit',gameEvents.onPostGames);
  //   $('#update-book').on('submit',gameEvents.onGetGamesId);
  //   $('#delete-book').on('submit',gameEvents.onGetGamesIds);
  // $('#update-book').on('submit',gameEvents.onGetGamesIdWatch);

})
