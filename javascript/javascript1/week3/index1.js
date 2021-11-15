//*****  Item array removal ********
const names = [
    "Peter",
    "Ahmad",
    "Yana",
    "kristina",
    "Rasmus",
    "Samuel",
    "katrine",
    "Tala",
  ];
  const nameToRemove = "Ahmad"
  const arrayIndex=names.indexOf(nameToRemove)  
  // Write some code here   
  delete names[arrayIndex] 
  // Code done  

  console.log(names)
  console.log("-------------------------------")

        

//*****  When will we be there?? ********

const travelInformation = {
  speed: 50,
  destinationDistance: 432,
}



function calculateTime(arr){

  let calculateHour=arr.destinationDistance / arr.speed
  let calculateMinute=arr.destinationDistance % arr.speed
   

  let str=calculateHour.toString()
  let numArray=str.split('.')
  let a=new Array()
  a=numArray
  
  return console.log(`Travel time is : ${a[0]} hours and ${calculateMinute} minutes`)
  
}

const travelTime = calculateTime(travelInformation)
console.log("-------------------------------")



//*****  Series duration of my life ******


let age =80

age=(365*24*60*age)

let seriesDurations = [
  {
    title: "The Queen's Gambi",
    days: 2,
    hours: 19,
    minutes: 0,
  },
  {
    title: "Breaking Bad",
    days: 5,
    hours: 0,
    minutes: 30,
  },
  {
    title: "Squid Game",
    days: 5,
    hours: 8,
    minutes: 36,
  },
]

function logOutSeriesText(){

  for (let i=0 ; i< seriesDurations.length ; i++){

    let dayToMinutes= seriesDurations[i].days*24*60
    let hourToMinutes= seriesDurations[i].hours*60

    let totalMinutes= (dayToMinutes+hourToMinutes+seriesDurations[i].minutes)*100
   
    let spendTime=(totalMinutes / age).toFixed(3)
    console.log(`${seriesDurations[i].title} took ${spendTime}% of my life`)

  }
}

logOutSeriesText()

