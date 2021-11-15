
const activities=[]

function addActivity(date, activity, duration) {
    // write some code here
    
      let obj={
        date:date,
        activity:activity,
        duration:duration
      }
      
      activities.push(obj)
}
    

addActivity("23/7-18", "Youtube", 30);
addActivity("25/11-20", "Netflix", 60);
addActivity("5/10-21", "Instagram", 40);
addActivity("25/11-20", "Facebook", 15);

console.log(activities)
console.log("---------------------------------------------")

let limit=180

function showStatus(){
    let totalDuration=0
   for (i=0 ; i<activities.length; i++){
        totalDuration += activities[i].duration
   }
   if (totalDuration>limit)
     return console.log("You have reached your limit, no more smartphoning for you!")
     
   else          
     return (console.log(`You have added ${i} activities. They amount to ${totalDuration} min. of usage`))
       
}

showStatus();

addActivity("25/11-20", "Facebook", 75);
showStatus()
let today = new Date();

addActivity(today.toLocaleDateString("en-US"),"LinkedIn",30)
console.log(activities)
console.log("---------------------------------------------")



//------actitivies for that specific date---------

function showStatus1(date){
    
    for (i=0 ; i<activities.length; i++){
        if(activities[i].date===date)
          return console.log(activities[i])   
    }    
    
 }
 showStatus1("23/7-18")

 console.log("---------------------------------------------")

 function calculatingMostTime(){
      let maxTime=0
      let time
      let content
     for (i=0 ; i<activities.length ;i++)
      
       for(j=i+1 ;j<activities.length-1; j++)
          if(activities[i].activity===activities[j].activity)
          {
            time = activities[j].duration+activities[i].duration
            content=activities[i].activity
          }
          if(time>maxTime)
          maxTime=time      
       
       time=0   
       
       
     return console.log(`You have spent the most time on ${content}`)
       
}
calculatingMostTime()