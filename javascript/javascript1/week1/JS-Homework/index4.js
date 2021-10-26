console.log("Startup name generator");

const arrayName1 = ["Easy", "Awesome", "Corporate","SolidData","ProITGuys","Digital","Omegazero","AdvantageNetwork","Optimized","Trionix"];
const arrayName2 = ["OnlineSystems","OneFold","Database","FutureteqIT","Concentric","Electronics","ComputingPings","Electronic Scamping","ThinkITInc","ExpressIT"];


const arrayNumber1 =Math.floor(Math.random()*10);
const arrayNumber2 = Math.floor(Math.random()*10);

let startupName = arrayName1[arrayNumber1] +" "+arrayName2[arrayNumber2];

console.log(`The startup name is : ${startupName} contains ${startupName.length} characters`);