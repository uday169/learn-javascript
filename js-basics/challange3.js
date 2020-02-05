//solution of challange 3
var bill = 0;

function tipCalculator(bill){
    if (bill <= 50)
    {
        return bill *(20/100);
    }
    else if (bill > 50 && bill <= 200 ) {
        return bill *(15/100);
    } else {
        return bill *(10/100);
    }
}


var bill1 = 124;
var bill2 = 48;
var bill3 = 268;

//tips
var tip1 = tipCalculator(bill1);

var tip2 = tipCalculator(bill2);

var tip3 = tipCalculator(bill3);

//Total Bills (bill+tip)
var totalBill1 = bill1 + tip1;
var totalBill2 = bill2 + tip2;
var totalBill3 = bill3 + tip3;

var tips = [tip1 , tip2 ,tip3];// 1. array of tips

var bills = [totalBill1 , totalBill2 ,totalBill3]; // 2. array of total bills

// print the result
console.log('All the value is in the doller($) currency.');

console.log(tips);

console.log(bills);