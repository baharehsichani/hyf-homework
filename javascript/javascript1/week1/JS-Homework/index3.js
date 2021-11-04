console.log("A house price estimator");
// Peter 
let houseWidth=8;
let houseDeep=10;
let houseHeight=10;

let volumeInMeters= houseWidth*houseDeep*houseHeight;
let gardenSizeInM2=100;
let houseCosts= 2500000;

let housePrice =Math.abs(volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300);

if (housePrice>houseCosts){
    console.log("Peter is paying too much");
}else if(housePrice<houseCosts){
    console.log("Peter is paying too little");
}else
console.log("Julia is paying just the right amount")

// Julia  
houseWidth=5;
houseDeep=11;
houseHeight=8;

volumeInMeters= houseWidth*houseDeep*houseHeight;
gardenSizeInM2=70;
houseCosts= 1000000;

housePrice =Math.abs(volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300);

if (housePrice>houseCosts){
    console.log("Julia is paying too much");
}else if(housePrice<houseCosts){
    console.log("Julia is paying too little");
}else
console.log("Julia is paying just the right amount")
