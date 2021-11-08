
const arrayOfWeekdays = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

const today=new Date()
const day=today.getDate()

console.log(today)
console.log(day)


function getEventWeekday(num){

    const result=day+(num%7)   

    if(result<=7)
      return (arrayOfWeekdays[result])
     else
      return (arrayOfWeekdays[(result%7)])  
}

console.log(getEventWeekday(3))



