basic.forever(function () {
    if (input.lightLevel() > 128) {
        basic.showString("too bright")
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            . . . . .
            `)
        basic.showLeds(`
            # . . . .
            # . . . .
            . . . . .
            . # . . .
            # . . . .
            `)
        basic.showLeds(`
            . # . . .
            . # . . .
            . . . . .
            . . # . .
            # # . . .
            `)
        basic.showLeds(`
            # . # . .
            # . # . .
            . . . . .
            . . . # .
            # # # . .
            `)
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.showLeds(`
            . . # . #
            . . # . #
            . . . . .
            . # . . .
            . . # # #
            `)
        basic.showLeds(`
            . . . # .
            . . . # .
            . . . . .
            . . # . .
            . . . # #
            `)
        basic.showLeds(`
            . . . . #
            . . . . #
            . . . . .
            . . . # .
            . . . . #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . #
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
