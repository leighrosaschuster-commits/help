def on_received_string(receivedString):
    if receivedString == "goForward":
        BitBuggy.forward()
    elif receivedString == "goBackward":
        BitBuggy.back()
    elif receivedString == "turnLeft":
        BitBuggy.turnleft()
    elif receivedString == "turnRight":
        BitBuggy.turnright()
    elif receivedString == "Stop":
        BitBuggy.brake()
    elif receivedString == "A":
        # Opens the grabber (Make sure it's plugged into P1!)
        servos.P1.set_angle(90)
    elif receivedString == "X":
        # Closes the grabber (You will need to send "C" from your controller)
        servos.P1.set_angle(135)
    elif receivedString == "B":
        for index in range(4):
            flexFX.set_next_tempo(randint(100, 200))
            music.play(music.string_playable(flexFX.built_in_tune(flexFX.BuiltInTune.ODE_TO_JOY), 120),
                music.PlaybackMode.UNTIL_DONE)
radio.on_received_string(on_received_string)

imag = 0
strip = neopixel.create(DigitalPin.P16, 2, NeoPixelMode.RGB)
strip.set_brightness(100)
radio.set_group(1)
faces.show_face(faces.Eyes.MAD, faces.Mouth.SMIRK)
# Wheels are on P0 and P2
BitBuggy.init_wheel(AnalogPin.P0, AnalogPin.P2)
# Set the grabber to its starting position on P1
servos.P1.set_angle(90)

def on_forever():
    faces.blink(2000, 50, 200)
basic.forever(on_forever)

def on_forever2():
    if randint(1, 10) == 1:
        faces.wink(Math.random_boolean(), 1000, Math.random_boolean())
    elif randint(1, 10) == 2:
        faces.wink(Math.random_boolean(), 1000, Math.random_boolean())
basic.forever(on_forever2)
