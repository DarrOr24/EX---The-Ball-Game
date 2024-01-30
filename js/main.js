'use strict'

var gBallDiameter = 100

function onBallClick(elBall, maxDiameter){
    var incrementSize = getRandomInt(20, 61)
    gBallDiameter += incrementSize
    if(gBallDiameter > maxDiameter) gBallDiameter = 100
    elBall.style.height = `${gBallDiameter}px`
    elBall.style.width = `${gBallDiameter}px`
    elBall.innerHTML=`${gBallDiameter}`
    
    var ballColor = getRandomColor()
    elBall.style.backgroundColor = `${ballColor}`


}