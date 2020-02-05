// challenge 4 : calculate the bmi of mark and john and prnt who has highest bmi.


// mark object
var mark = {
    name: 'Mark',
    mass: 66,
    height: 1.75,
    calcBmi: function() {
        this.bmi = this.mass / (this.height * this.height);
    }
};

mark.calcBmi();
console.log(mark);

// john object
var john = {
    name: 'John',
    mass: 68,
    height: 1.81,
    calcBmi: function() {
        this.bmi = this.mass / (this.height * this.height);
    }
};

john.calcBmi();
console.log(john);

 // compare bmi function
 function bmiCompare() {
        if (john.bmi > mark.bmi) {
            
            return john.name+ ' bmi is highest , which is ' +john.bmi;

        }else if (john.bmi < mark.bmi) {

            return  mark.name+ ' bmi is highest , which is ' +mark.bmi;

        } else {

            return john.name+ ' bmi is equal to',mark.name+ ' bmi.';
        }
    }

    console.log(bmiCompare());