radio.onReceivedString(function (receivedString) {
    if (receivedString == "goForward") {
        BitBuggy.forward()
    } else if (receivedString == "goBackward") {
        BitBuggy.back()
    } else if (receivedString == "turnLeft") {
        BitBuggy.turnleft()
    } else if (receivedString == "turnRight") {
        BitBuggy.turnright()
    } else if (receivedString == "Stop") {
        BitBuggy.brake()
    } else if (receivedString == "A") {
        // Opens the grabber (Make sure it's plugged into P1!)
        servos.P1.setAngle(90)
    } else if (receivedString == "X") {
        // Closes the grabber (You will need to send "C" from your controller)
        servos.P1.setAngle(135)
    } else if (receivedString == "B") {
        for (let index = 0; index < 4; index++) {
            flexFX.setNextTempo(randint(100, 200))
            music.play(music.stringPlayable(flexFX.builtInTune(flexFX.BuiltInTune.OdeToJoy), 120), music.PlaybackMode.UntilDone)
        }
    }
})
let imag = 0
let strip = neopixel.create(DigitalPin.P16, 2, NeoPixelMode.RGB)
strip.setBrightness(100)
radio.setGroup(1)
faces.showFace(faces.Eyes.Mad, faces.Mouth.Smirk)
// Wheels are on P0 and P2
BitBuggy.init_wheel(AnalogPin.P0, AnalogPin.P2)
// Set the grabber to its starting position on P1
servos.P1.setAngle(90)
basic.forever(function () {
    faces.blink(2000, 50, 200)
})
basic.forever(function () {
    if (randint(1, 10) == 1) {
        faces.wink(Math.randomBoolean(), 1000, Math.randomBoolean())
    } else if (randint(1, 10) == 2) {
        faces.wink(Math.randomBoolean(), 1000, Math.randomBoolean())
    }
})
