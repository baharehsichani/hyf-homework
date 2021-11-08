
const boughtCandyPrices = []

function addCandy(candyType ,weight ){
    let candyPrice;
    switch (candyType) {
        case 'sweet':
            candyPrice = weight * 0.5;
            break;
        case 'chocolate':
            candyPrice = weight * 0.7;
            break;
        case 'toffee':
            candyPrice = weight * 1.1;
            break;
        case 'chewing-gum':
            candyPrice = weight * 0.03;
            break;
        default:
            break;
    }
    boughtCandyPrices.push(candyPrice)
}

const amountToSpend =  Math.random() * 100;
console.log(`Total amount to spend = ${amountToSpend}`)

function canBuyMoreCandy(moneyToSpend){
    let totalPrice=0
    for (let i=0 ; i<boughtCandyPrices.length ; i++){
        totalPrice=boughtCandyPrices[i]+totalPrice
    }

    console.log(`Total price for buying candy's = ${totalPrice}`)
   
    if(totalPrice<amountToSpend)
      return true
    else 
      return false
}

addCandy("sweet", 10);
addCandy("toffee", 5);
addCandy("chocolate", 25)

if (boughtCandyPrices.length > 0) {
    if (canBuyMoreCandy(amountToSpend)) 
        console.log("You can buy more, so please do!");
    else 
        console.log("Enough candy for you!");    
} 