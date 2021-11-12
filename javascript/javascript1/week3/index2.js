
let notes = [];

function saveNote(content, id) {
  // write some code here
  
    let obj={
        content:content,
        id:id
    }
    
    notes.push(obj)
}
  


saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes);

function getNote(id) {
    // your code here
    for (i=0;i <=notes.length;i++){
        if(id != ""){
          if(notes[i].id===id)
            return notes[i]
            else
              return (console.log("This id does not exist"))
        }
         
        return (console.log("Id has to be a number"))
    }
  }
  
  const firstNote = getNote(1);
  console.log(firstNote);


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

  