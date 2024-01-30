'use strict'

var gBallDiameter = 100

function onBallClick(elBall){
    var incrementSize = getRandomInt(20, 61)
    gBallDiameter += incrementSize
    
    if(gBallDiameter > 400) gBallDiameter = 100
   
    elBall.style.height = `${gBallDiameter}px`
    elBall.style.width = `${gBallDiameter}px`

    elBall.innerHTML=`${gBallDiameter}`

}