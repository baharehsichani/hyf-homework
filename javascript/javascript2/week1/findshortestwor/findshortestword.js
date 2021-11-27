//-----------------Find the shortest word------------------------
const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];


function  findShoterstWord(danishWords) {
    let shortestWord = danishWords[0]
    for (let i = 0; i < danishWords.length; i++) {
        if (danishWords[i].length < shortestWord.length) {
            shortestWord = danishWords[i]
        }
    }

    document.getElementById('demo').innerText=shortestWord

    console.log(shortestWord)
    
    
} // returns 'ø'

findShoterstWord(danishWords) 


//----------Find and count the Danish letters------------------------


const countDanishLetterArr=[]
const danishLetterArr=['å','æ','ø']
let countDanishLetter    

let totalCount=0

function  findDanishLtter(danishString) {

    const letterÅ = (danishString.match(/å/g) || []).length
    const letterÆ = (danishString.match(/æ/g) || []).length
    const letterØ = (danishString.match(/ø/g) || []).length

    countDanishLetter=letterÅ+letterÆ+letterØ

    let danishLetter={}
    danishLetter.total=countDanishLetter
 
    if(letterÅ!=0)
       danishLetter["å"]=letterÅ
    if(letterÆ!=0)
       danishLetter["æ"]=letterÆ
    if(letterØ!=0)
       danishLetter["ø"]=letterØ
       
    return danishLetter   
   
}

const danishString = "Jeg har en blå bil"
console.log(findDanishLtter(danishString)) // returns {total: 1, å: 1}

const danishString2 = "Blå grød med røde bær"
console.log(findDanishLtter(danishString2)) // returns {total: 4, æ: 1, ø: 2, å: 1}



//------------------Spirit animal name generator-------------------

