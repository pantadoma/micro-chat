input.onButtonPressed(Button.A, function () {
    radio.sendString("hello how are you.I am micro bit ")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(1)
