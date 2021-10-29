const secondHand = document.querySelector('.second-hand')
const minHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')


const setDate = () => {
    const date = new Date();
    
    const seconds = date.getSeconds();
    const secondsDeg = ((seconds/60) * 360) + 90
    
    const minutes = date.getMinutes();
    const minDeg = ((minutes / 60) * 360) + 90

    const hours = date.getHours();
    const hoursDeg = ((hours/12) * 360) + 90

    setHands(secondHand, secondsDeg)
    setHands(minHand, minDeg)
    setHands(hourHand, hoursDeg)
}

const setHands = (hand, deg) => {
    hand.style = `transform: rotate(${deg}deg);`
}



setInterval(setDate ,1000)