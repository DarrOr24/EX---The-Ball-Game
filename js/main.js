'use strict'

var gBallDiameter = 100

function onBallClick(elBall){
    gBallDiameter *= 1.5

    if(gBallDiameter > 400) gBallDiameter = 100
   
    elBall.style.height = `${gBallDiameter}px`
    elBall.style.width = `${gBallDiameter}px`

    elBall.innerHTML=`${gBallDiameter}`

}