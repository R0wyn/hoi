basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showString("\"Rowin\"")
    }
    if (input.buttonIsPressed(Button.B)) {
        basic.showString("\"Mennen\"")
    }
    if (input.isGesture(Gesture.Shake)) {
        basic.showString("16")
    }
})
