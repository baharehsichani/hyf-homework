
let notes = [];

function saveNote(content, id) {
  // write some code here
  
    let taskObj={
        content:content,
        id:id
    }
    
    notes.push(taskObj)
  } 


saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes);

function getNote(id) {
 
    // your code here
    let checkId=false
    if(typeof id === 'number'){
       for (i=0;i <notes.length;i++){
          if(notes[i].id===id)
          {
            checkId=true
            console.log(notes[i])     
          }     
        }
        if (checkId===false)
          console.log("This is does not exist")
    }else     
      (console.log("Id has to be a number"))
  }
  
  getNote(2);
  


  function logOutNotesFormatted() {
    
    for(i=0 ; i<notes.length ; i++)
    {
         (console.log(`The note with id: ${notes[i].id}, has the following note text: ${notes[i].content} `))
    }
  }
  
  logOutNotesFormatted(); 
  
  function changeItem(content,id){
    for (i=0 ; i<notes.length ; i++){
        if (notes[i].id===id)
          notes[i].content=content
    }

  }

  changeItem("take a shower",1)
  console.log(notes)

  function deleteItem(id){
    for (i=0 ; i<notes.length ; i++){
        if (notes[i].id===id)
          delete notes[i]
    }
  }  
  
  deleteItem(2)
  console.log(notes)

  