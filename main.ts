let speed = 0
let strip = neopixel.create(DigitalPin.P0, 15, NeoPixelMode.RGB)
strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Purple))
strip.show()
basic.forever(function () {
    speed = pins.map(
    pins.analogReadPin(AnalogPin.P0),
    0,
    1023,
    250,
    900
    )
    basic.pause(speed)
    strip.rotate(1)
    strip.show()
})
