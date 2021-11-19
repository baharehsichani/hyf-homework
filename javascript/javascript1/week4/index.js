
let nameArray=[]
let todoArray=[]
let todoName=[]
function getReply(command) {   

    if (command.includes('Hello my name is Benjamin'))
    {
        const splitCommand = command.split(' ')
        nameArray.push(splitCommand[4])
        console.log(`Nice to meet you ${nameArray[0]}`)
    }
          
   if(command.includes('What is my name')){
    if (nameArray!="")
    console.log(`Your name is ${nameArray[0]}`)
  else 
    console.log("Your name has not yet been mentioned") 
    
   }  
   
   
    if (command.includes('Add fishing to my todo')){
     
        todoName.push('fishing')
        console.log('fishing added to your todo')              
    }else if (command.includes('Add singing in the shower to my todo')){
     
        todoName.push('singing in the shower')
        console.log('singing in the shower added to your todo')              
    }

    if(command.includes('Remove fishing from my todo'))
    {
        todoName.shift()
        console.log('fishing remove from your todo list')
    }
      
    if (command.includes('what is on my todo')){

        console.log(`You have ${todoName.length} item(s) in your todo list: ${todoName}`);
    }

    if(command.includes('What day is it today?')){
        const monthNames = ["January", "February", "March", "April", "May", "June",
                           "July", "August", "September", "October", "November", "December"]
        const date = new Date()
       
        const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date)
        const mo = monthNames[date.getMonth()]//new Intl.DateTimeFormat('en', { month: 'short' }).format(date)
        const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date)

       console.log(`${da}-${mo}-${ye}`)
    }
    
   
    let opratorSplitArray=[]
    let oprator
    if (command.includes('+')|| command.includes('-') ||command.includes('*')||command.includes('/')){
        opratorSplitArray=command.split(' ')
       
       if(command.includes('+'))
       {
         oprator=Number(opratorSplitArray[2])+ Number(opratorSplitArray[4])
        console.log(`${opratorSplitArray[2]} + ${opratorSplitArray[4]} = ${oprator}`)
       }
       if(command.includes('-'))
       {
        oprator=Number(opratorSplitArray[2])- Number(opratorSplitArray[4])
        console.log(`${opratorSplitArray[2]} - ${opratorSplitArray[4]} = ${oprator}`)
       }
       if(command.includes('*'))
       {
        oprator=Number(opratorSplitArray[2])* Number(opratorSplitArray[4])
        console.log(`${opratorSplitArray[2]} * ${opratorSplitArray[4]} = ${oprator}`)
       }
       if(command.includes('/'))
       {
        oprator=Number(opratorSplitArray[2])/ Number(opratorSplitArray[4])
        console.log(`${opratorSplitArray[2]} / ${opratorSplitArray[4]} = ${oprator}`)
       }

       
        
    }

    if (command.includes('timer')){           
        let timerSplitArray=[]
        timerSplitArray=command.split(' ')
        console.log(`Timer set for ${timerSplitArray[4]} minutes`)
        
        function setTimer(){
            console.log('Timer done')
        }
        setTimeout(setTimer, 60000,  );

    }

    
}

getReply('Hello my name is Benjamin')
getReply('What is my name')

getReply('Add fishing to my todo')
getReply('Add singing in the shower to my todo')

getReply('Remove fishing from my todo')
getReply('what is on my todo')

getReply('What day is it today?')
getReply("what is 3 + 3");
getReply("what is 4 * 5");

getReply('Set a timer for 1 minutes')