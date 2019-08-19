const store = require('../store.js')

store.xGamesWin = 0
store.oGamesWin = 0

const winnerWins = function () {
  $('.game-changes').text('Game over! ' + store.winner + ' wins!')
  $('.your-turn').hide()
  if (store.winner === 'x') {
    store.xGamesWin++
  }
  if (store.winner === 'o') {
    store.oGamesWin++
  }
}

const invalidMoveMessage = function () {
  $('.game-changes').html('Invalid move!')
}

const turnChange = function () {
  $('.your-turn').text(`${store.currentPlayer}'s turn!`)
}

const gameOverMessage = function () {
  $('.game-changes').text('Game over! Do you want to play again? Click new game!')
  $('.your-turn').hide()
}

const draw = function () {
  $('.game-changes').text('Game over! It\'s a draw!')
  $('.your-turn').hide()
}

const createGameSuccess = function (response) {
  store.game = response.game
  $('.container').show()
  $('.your-turn').text('x\'s turn!').show()
  $('.user-message').text('')
  $('.game-changes').text('').show()
}

const createGameFailure = function (response) {
  $('.user-message').text('Failed to create a new game')
}

const updateGameSuccess = function (response) {
//  No necesitamos nada aqui puesto que si ganas haces trigger a otra accion
}

const updateGamesFailure = function (response) {
  $('.user-message').text('Sorry, could not update the game')
}

const getGamesSuccess = function (response) {
  $('.user-message').text('')
  let gamesPlayed = 0

  response.games.forEach((game) => {
    gamesPlayed++
  })

  $('.user-status').html(`<p>Games played (all-time): ${gamesPlayed}</p><p>x Wins (this session): ${store.xGamesWin}</p><p>o Wins (this session): ${store.oGamesWin}</p>`)
  $('#statsModal').modal('show')
}
const getGamesFailure = function (response) {
  $('.user-status').text('Error from our server!')
}

module.exports = {
  winnerWins,
  invalidMoveMessage,
  turnChange,
  gameOverMessage,
  draw,
  createGameSuccess,
  createGameFailure,
  updateGameSuccess,
  updateGamesFailure,
  getGamesSuccess,
  getGamesFailure
}
