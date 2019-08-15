'use strict'

const onClickBox = function (event) {
  const boxText = $(event.target).text()
  if (!boxText) {
    $(event.target).text('O')
    console.log('You can play')
  }

}
module.exports = {
  onClickBox
}
