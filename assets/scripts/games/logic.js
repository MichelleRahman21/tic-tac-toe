
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')

let currentBoard = ['', '', '', '', '', '', '', '', '']
let currentPlayer = 'x'
let winner = ''
let gameOver = false

const resetBoard = function () {
  $('.box').html('')
  currentBoard = ['', '', '', '', '', '', '', '', '']
  gameOver = false
  currentPlayer = 'x'
}

const checkForWin = function () {
  if ((currentBoard[0] === 'x' && currentBoard[1] === 'x' && currentBoard[2] === 'x') ||
   (currentBoard[0] === 'o' && currentBoard[1] === 'o' && currentBoard[2] === 'o')) {
    winner = currentBoard[0]
    gameOver = true
    store.gameStatus = gameOver
    store.winner = winner
    ui.winnerWins()
  } else if ((currentBoard[3] === 'x' && currentBoard[4] === 'x' && currentBoard[5] === 'x') ||
   (currentBoard[3] === 'o' && currentBoard[4] === 'o' && currentBoard[5] === 'o')) {
    winner = currentBoard[3]
    gameOver = true
    store.gameStatus = gameOver
    store.winner = winner
    ui.winnerWins()
  } else if ((currentBoard[6] === 'x' && currentBoard[7] === 'x' && currentBoard[8] === 'x') ||
   (currentBoard[6] === 'o' && currentBoard[7] === 'o' && currentBoard[8] === 'o')) {
    winner = currentBoard[6]
    gameOver = true
    store.gameStatus = gameOver
    store.winner = winner
    ui.winnerWins()
  } else if ((currentBoard[0] === 'x' && currentBoard[4] === 'x' && currentBoard[8] === 'x') ||
   (currentBoard[0] === 'o' && currentBoard[4] === 'o' && currentBoard[8] === 'o')) {
    winner = currentBoard[0]
    gameOver = true
    store.gameStatus = gameOver
    store.winner = winner
    ui.winnerWins()
  } else if ((currentBoard[0] === 'x' && currentBoard[3] === 'x' && currentBoard[6] === 'x') ||
   (currentBoard[0] === 'o' && currentBoard[3] === 'o' && currentBoard[6] === 'o')) {
    winner = currentBoard[0]
    gameOver = true
    store.gameStatus = gameOver
    store.winner = winner
    ui.winnerWins()
  } else if ((currentBoard[1] === 'x' && currentBoard[4] === 'x' && currentBoard[7] === 'x') ||
   (currentBoard[1] === 'o' && currentBoard[4] === 'o' && currentBoard[7] === 'o')) {
    winner = currentBoard[1]
    gameOver = true
    store.gameStatus = gameOver
    store.winner = winner
    ui.winnerWins()
  } else if ((currentBoard[2] === 'x' && currentBoard[5] === 'x' && currentBoard[8] === 'x') ||
   (currentBoard[2] === 'o' && currentBoard[5] === 'o' && currentBoard[8] === 'o')) {
    winner = currentBoard[2]
    gameOver = true
    store.gameStatus = gameOver
    store.winner = winner
    ui.winnerWins()
  } else if ((currentBoard[2] === 'x' && currentBoard[4] === 'x' && currentBoard[6] === 'x') ||
   (currentBoard[2] === 'o' && currentBoard[4] === 'o' && currentBoard[6] === 'o')) {
    winner = currentBoard[2]
    gameOver = true
    store.gameStatus = gameOver
    store.winner = winner
    ui.winnerWins()
  }
}

const checkForDraw = function (gameBoard) {
  if (currentBoard.every(index => index !== '')) {
    ui.draw()
    gameOver = true
    store.gameStatus = gameOver
  }
}

const switchPlayer = function () {
  if (currentPlayer === 'x') {
    currentPlayer = 'o'
    store.currentPlayer = currentPlayer
    ui.turnChange()
  } else {
    currentPlayer = 'x'
    store.currentPlayer = currentPlayer
    ui.turnChange()
  }
}

const updateBox = function () {
  $('.game-changes').text('')
  const content = $(event.target).text()
  const boxNum = $(event.target).data('id')
  store.boxNum = boxNum
  if (gameOver === true) {
    ui.gameOverMessage()
  } else if (content === '') {
    $(event.target).text(currentPlayer)
    currentBoard[boxNum] = currentPlayer
    checkForDraw(currentBoard)
    checkForWin(currentBoard)
    // ui.getGamesSuccess()
    api.updateGame()
      .then(ui.updateGameSuccess)
      .catch(ui.updateGameFail)
    switchPlayer()
  // } else if (content === '' && currentPlayer === 'o') {
  //   $(event.target).text(currentPlayer)
  //   currentBoard[boxNum] = currentPlayer
  //   checkForDraw(currentBoard)
  //   checkForWin(currentBoard)
  //   api.updateGame()
  //     .then(ui.updateGameSuccess)
  //     .catch(ui.updateGameFail)
  //   switchPlayer()
  } else {
    ui.invalidMoveMessage()
  }
}

const addHandlers = function () {
  $('.box').on('click', updateBox)
  $('#new-game').on('click', resetBoard)
}

module.exports = {
  addHandlers
}
