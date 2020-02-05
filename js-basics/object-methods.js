// Object Methods

var uday = {
    firstName: 'Uday',
    lastName: 'Singh',
    birthYear: 1997,
    family: ['ram', 'shyam', 'mohan','sohan'],
    job: 'Developer',
    isMarried: false,
    calcAge: function(birthYear){
        this.age = 2020 - this.birthYear;
    }
};
uday.calcAge();
console.log(uday);
