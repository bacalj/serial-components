/**
 * micro:bit simple serial
 * just sends a random number between 0 and 200
 */

let mode = 0
let mIndex = 0

function startUp() {
  serial.redirect(
    SerialPin.USB_TX,
    SerialPin.USB_RX,
    BaudRate.BaudRate9600
  )
  mode = 0
  mIndex = 0
  basic.showIcon(IconNames.Asleep)
}

function sendStreamMessage() {
  if (mode == 1) {
    pause(100)
    const myVal = randint(0, 200)
    serial.writeLine(`d${myVal}`)
  }
}

startUp()

input.onButtonPressed(Button.A, function () {
  mode = 1
  basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.B, function () {
  mode = 0
  basic.showIcon(IconNames.Asleep)
})

basic.forever(function () {
  if (mode == 1) {
    sendStreamMessage();
  }
  else {
    basic.showIcon(IconNames.Asleep)
  }
})
