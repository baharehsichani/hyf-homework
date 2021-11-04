
const class07Students = []
let findSameName


function addStudentToClass(studentName) {
    for (i=0; i<class07Students.length ; i++){
        if (studentName===class07Students[i]){
            findSameName=true
            console.log(`Student ${studentName} is already in the class`)
        }         

    }
    if (findSameName!=true)
    {
        if (class07Students.length<=5 && studentName!=null)
          class07Students.push(studentName)
        else 
         console.log("Cannot add more students to class 07")

        if (studentName==="queen")    
         class07Students.push(studentName)       
    } 
  
}

addStudentToClass("A")

function getNumberOfStudents() {
  return console.log(class07Students.length)
}
getNumberOfStudents()