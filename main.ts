input.onButtonPressed(Button.A, function () {
    a = a / 2
})
input.onButtonPressed(Button.B, function () {
    a = a * 2
})
let a = 0
a = 1
basic.forever(function () {
    basic.showNumber(a)
})
