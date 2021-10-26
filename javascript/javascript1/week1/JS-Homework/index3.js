console.log("A house price estimator");
// Peter 
let wide=8;
let deep=10;
let high=10;

let volumeInMeters= wide*high*deep;
let gardenSizeInM2=100;
let houseCosts= 2500000;

let housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;

if (housePrice>houseCosts){
    console.log("Peter is paying too much");
}else{
    console.log("Peter is paying too little");
}

// Julia  
wide=5;
deep=11;
high=8;

volumeInMeters= wide*high*deep;
gardenSizeInM2=70;
houseCosts= 1000000;

housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;

if (housePrice>houseCosts){
    console.log("Julia is paying too much");
}else{
    console.log("Julia is paying too little");
}
