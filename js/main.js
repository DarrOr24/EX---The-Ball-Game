'use strict'

var gBall1Diameter = 100
var gBall2Diameter = 100
var gBall1Diameter = 100
var gBall1Color = 'bisque'
var gBall2Color = 'rgb(136, 225, 237)'

function onBallClick(elBall, maxDiameter, elBallClass){

    if (elBallClass === 'ball3'){
        swapColors()
        return
    }

    var ballColor = getRandomColor()
    var incrementSize = getRandomInt(20, 61)
    
    if (elBallClass === 'ball1'){
        changeBall1(elBall, ballColor, incrementSize, maxDiameter)
        return
    }

    changeBall2(elBall, ballColor, incrementSize, maxDiameter)
}

function swapColors(){
    const ball2Color = gBall2Color
        const ball1Color = gBall1Color
        const ball2Diameter = gBall2Diameter
        const ball1Diameter = gBall1Diameter

        const elBall1 = document.querySelector('.ball1')
        elBall1.style.height = `${gBall2Diameter}px`
        elBall1.style.width = `${gBall2Diameter}px`
        elBall1.innerHTML=`${gBall2Diameter}`
        elBall1.style.backgroundColor = `${gBall2Color}`

        const elBall2 = document.querySelector('.ball2')
        elBall2.style.height = `${gBall1Diameter}px`
        elBall2.style.width = `${gBall1Diameter}px`
        elBall2.innerHTML=`${gBall1Diameter}`
        elBall2.style.backgroundColor = `${gBall1Color}`

        gBall1Color = ball2Color
        gBall2Color = ball1Color
        gBall1Diameter = ball2Diameter
        gBall2Diameter = ball1Diameter
}

function changeBall1(elBall, ballColor, incrementSize, maxDiameter){
   
    gBall1Diameter += incrementSize
    if(gBall1Diameter > maxDiameter) gBall1Diameter = 100
    elBall.style.height = `${gBall1Diameter}px`
    elBall.style.width = `${gBall1Diameter}px`
    elBall.innerHTML=`${gBall1Diameter}`
    elBall.style.backgroundColor = `${ballColor}`

    gBall1Color = ballColor
    
}

function changeBall2(elBall, ballColor, incrementSize, maxDiameter){
    gBall2Diameter += incrementSize
    if(gBall2Diameter > maxDiameter) gBall2Diameter = 100
    elBall.style.height = `${gBall2Diameter}px`
    elBall.style.width = `${gBall2Diameter}px`
    elBall.innerHTML=`${gBall2Diameter}`
    gBall2Color = ballColor
    elBall.style.backgroundColor = `${ballColor}`
}

