
const clothes1="shorts and a t-shirt"
const clothes2="jacket and pants"
const clothes3="warm clothes"



function weatherWear(num){
    if(num>=0 && num<15)
     return clothes2
     else if (num>15)
      return clothes1
      else
        return clothes3
}

console.log(weatherWear(24))