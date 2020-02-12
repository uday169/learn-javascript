
// Challenge 5 Solution

// Object John
var john = {
    name: 'John',
    bills: [124, 48, 268, 180, 42],
    tipCalc: function() {
        this.tips = [];
        this.totalBills = [];

        for(i = 0 ; i < this.bills.length; i++ ){

            var percentage;
            var bill = this.bills[i];

            if(bill < 50 ){
                 percentage =  0.2;
            }else if (bill >= 50 && bill < 200) {
                percentage = 0.15;
            } else {
                percentage = 0.1 ;
            }
            this.tips[i] = bill * percentage;
            this.totalBills[i] = bill + (bill * percentage);
        } 
    } 
};

// Object mark
var mark = {
    name: 'Mark',
    bills: [77, 375, 110, 45],
    tipCalc: function() {
        this.tips = [];
        this.totalBills = [];

        for(i = 0 ; i < this.bills.length; i++ ){

            var percentage;
            var bill = this.bills[i];

            if(bill < 100 ){
                 percentage =  0.2;
            }else if (bill >= 100 && bill < 300) {
                percentage = 0.1;
            } else {
                percentage = 0.25 ;
            }

            this.tips[i] = bill * percentage;
            this.totalBills[i] = bill + (bill * percentage);
        } 
    } 
};

// Avergae Calculation 
function calcAvg(tips) {
    sum = 0;

    for(var i =0; i < tips.length; i++){
        sum += tips[i];
    }
    return sum / tips.length;
}

john.tipCalc();
mark.tipCalc();

john_avg = john.average = calcAvg(john.tips);
mark_avg = mark.average = calcAvg(mark.tips);


// Check which is greater 
function checkAverage(john_avg, mark_avg) {

    if (john_avg > mark_avg){

        console.log('John average is greater than Mark');
       
       }else if(mark_avg > john_avg ){
       
         console.log('Mark average is greater than John');
       
       }else{
       
        console.log('john average is equal to Mark Average');
       }
}

console.log(john, mark);
console.log(checkAverage(john_avg, mark_avg));

