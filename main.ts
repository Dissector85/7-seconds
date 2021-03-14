let start = 0
let elapse = 0
let score = 0
input.onButtonPressed(Button.A, function () {
    start = input.runningTime()
    basic.showIcon(IconNames.SmallDiamond)
})
input.onButtonPressed(Button.B, function () {
    elapse = input.runningTime() - start
    score = Math.abs(elapse - 7000)
    basic.showNumber(Math.round(score / 1000))
})
basic.forever(function () {
	
})
