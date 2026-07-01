const s = `12:30:15PM`
const meridiem = s.slice(8, 10)
const hour = s.slice(0, 2)
const minute = s.slice(3, 5)
const seconds = s.slice(6, 8)

let militaryHour = ``
if (meridiem === "AM") {
    if(hour === `12`){
        militaryHour = `00`
    }else{
        militaryHour = parseInt(hour) >= 10 ? parseInt(hour) : `0${parseInt(hour)}`
    }
} else if (meridiem === "PM") {
    if(hour === `12` ){
        militaryHour = `12`
    }else{
        militaryHour = 12 + parseInt(hour)
    }
}

let militaryMinutes = parseInt(minute) >= 10 ? parseInt(minute) : `0${parseInt(minute)}`
let militarySeconds = parseInt(seconds) >= 10 ? parseInt(seconds) : `0${parseInt(seconds)}`
const formate = `${militaryHour}:${militaryMinutes}:${militarySeconds}`
console.log(formate)