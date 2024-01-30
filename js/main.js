'use strict'

var gBall1Diameter = 100
var gBall2Diameter = 100
var gBall1Diameter = 100
var gBall1Color = 'bisque'
var gBall2Color = 'rgb(136, 225, 237)'

function onBallClick(elBall, maxDiameter, elBallClass){

    const rndColor = getRandomColor()
    const incrementSize = getRandomInt(20, 61)
    
    if(elBallClass === 'ball5'){
        
        const elBody = document.querySelector('body')
        elBody.style.backgroundColor = `${rndColor}`
        
        return
    }
    if(elBallClass === 'ball4'){
        
        reduceBalls1And2(incrementSize)
        return
    }

    if (elBallClass === 'ball3'){
        swapBalls()
        return
    }

    
    if (elBallClass === 'ball1'){
        gBall1Diameter += incrementSize
        gBall1Color = rndColor
        if(gBall1Diameter > maxDiameter) gBall1Diameter = 100
        changeBall(elBall, rndColor, gBall1Diameter)
        return
    }
    if (elBallClass === 'ball2'){
        gBall2Diameter += incrementSize
        gBall2Color = rndColor
        if(gBall2Diameter > maxDiameter) gBall2Diameter = 100
        changeBall(elBall, rndColor, gBall2Diameter)
        return
    }
   
}

function swapBalls(){
    
    const elBall1 = document.querySelector('.ball1')
    changeBall(elBall1, gBall2Color, gBall2Diameter)
    
    const elBall2 = document.querySelector('.ball2')
    changeBall(elBall2, gBall1Color, gBall1Diameter)
    
    const ball2Color = gBall2Color
    const ball1Color = gBall1Color
    const ball2Diameter = gBall2Diameter
    const ball1Diameter = gBall1Diameter
    
    gBall1Color = ball2Color
    gBall2Color = ball1Color
    gBall1Diameter = ball2Diameter
    gBall2Diameter = ball1Diameter
}


function changeBall(elBall, ballColor, diameter){
    
    elBall.style.height = `${diameter}px`
    elBall.style.width = `${diameter}px`
    elBall.innerHTML=`${diameter}`
    elBall.style.backgroundColor = `${ballColor}`
}


function reduceBalls1And2(incrementSize){
    gBall1Diameter -= incrementSize
    gBall2Diameter -= incrementSize

    if(gBall2Diameter < 100) gBall2Diameter = 100
    if(gBall1Diameter < 100) gBall1Diameter = 100

    const elBall1 = document.querySelector('.ball1')
    elBall1.style.height = `${gBall1Diameter}px`
    elBall1.style.width = `${gBall1Diameter}px`
    elBall1.innerHTML=`${gBall1Diameter}`
    
    const elBall2 = document.querySelector('.ball2')
    elBall2.style.height = `${gBall2Diameter}px`
    elBall2.style.width = `${gBall2Diameter}px`
    elBall2.innerHTML=`${gBall2Diameter}`
}

function reset(){
    gBall1Diameter = 100
    gBall2Diameter = 100
    gBall1Diameter = 100
    gBall1Color = 'bisque'
    gBall2Color = 'rgb(136, 225, 237)'

    const elBody = document.querySelector('body')
    elBody.style.backgroundColor = 'black'

    const elBall1 = document.querySelector('.ball1')
    changeBall(elBall1, gBall1Color, gBall1Diameter)

    const elBall2 = document.querySelector('.ball2')
    changeBall(elBall2, gBall2Color, gBall2Diameter)
}

