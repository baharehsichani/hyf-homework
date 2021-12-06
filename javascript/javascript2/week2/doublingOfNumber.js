let numbers = [1, 2, 3, 4,5];


const newNumbers=(numbers.filter(item=>item % 2 !== 0)).map(item=>item*2)
        
console.log("The doubled numbers are", newNumbers); // [2, 6]
