

const hoursBlock = document.querySelector('.timer__hours')
const minBlock = document.querySelector('.timer__minutes')
const secondsBlock = document.querySelector('.timer__seconds')
const daysBlock = document.querySelector('.timer__days')


let interval 

const numWord = (value, words) =>{
    value = Math.abs(value) % 100
    const lastNum = value % 10
    
    if (value > 10 & value < 20) return words [2]
    if (lastNum >1 && lastNum <5) return words [1]
    if (lastNum === 1 ) return words [0]
return words [2]
}


const updateTimer = () => {

    const date = new Date()
    const dateDeadline = new Date('30 april 2022').getTime()
    const timeRemainig = (dateDeadline - date) /1000

    const days = Math.floor(timeRemainig / 60 / 60 /24 )
    const hours = Math.floor((timeRemainig / 60 / 60 ) %24)
    const min = Math.floor((timeRemainig  / 60 ) %60)
    const second = Math.floor(timeRemainig  % 60 )


    const fdays = days < 10 ? '0' + days : days
    const fHours = hours < 10 ? '0' + hours : hours
    const fMin = min < 10 ? '0' + min : min
    const fSecond = second < 10 ? '0' + second : second
    
    daysBlock.textContent = fdays
    hoursBlock.textContent = fHours
    minBlock.textContent = fMin
    secondsBlock.textContent = fSecond

    secondsBlock.nextElementSibling.textContent = numWord(second, ['секунда', 'секунды', 'секунд'])
    minBlock.nextElementSibling.textContent = numWord(min, ['минута', 'минуты', 'минут'])
    hoursBlock.nextElementSibling.textContent = numWord(hours, ['час', 'часа', 'часов'])
    daysBlock.nextElementSibling.textContent = numWord(days, ['день', 'дня', 'дней'])
    



    

    if (timeRemainig <=0){
        clearInterval(interval)
        daysBlock.textContent = '00'
        hoursBlock.textContent = '00'
        minBlock.textContent = '00'
        secondsBlock.textContent = '00'
    }
}

updateTimer()

interval = setInterval(updateTimer, 500)



const date = new Date().getTime()
const dateDeadline = new Date('24 april 2022').getTime()














