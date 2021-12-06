


function getFullname (fullname1 ,fullname2,useFormalName,gender){
    if(fullname1!="" && fullname2!="")
    {       
        if(gender==="male"){
            if (useFormalName ===true)
            return("Lord"+" "+fullname1+" "+fullname2)
         else
            return (fullname1+" "+fullname2)
        } else if(gender==="female"){
            if (useFormalName ===false)
            return("Ms"+" "+fullname1+" "+fullname2)
         else
            return (fullname1+" "+fullname2)
        }
        
    }else 
       return("you need to write youe name and your family")       
}


console.log(getFullname("","Hughes",true,"male"))
console.log(getFullname("Benjamin","Hughes",true,"male"))
console.log(getFullname("Benjamin","Hughes",false,"male"))
console.log(getFullname("Bahareh","Sichani",false,"female"))