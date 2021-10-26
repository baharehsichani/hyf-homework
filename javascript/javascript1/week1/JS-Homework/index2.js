
console.log("A dog age calculator");
const dogYearOfBirth = 2000;
const dogYearFuture =2015;
const dogYear = dogYearFuture - dogYearOfBirth ;
const shouldShowResultInDogYears=false; 

if (shouldShowResultInDogYears==true){
    console.log("Your dog will be " + (dogYear*7) + " dog years old in " + dogYearFuture);
}else{
    console.log("Your dog will be " + dogYear + " human years old in " + dogYearFuture);
}