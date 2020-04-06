// Object and Properties


// Object litrals
var uday = {
    firstName: 'Uday',
    lastName: 'Singh',
    birthYear: 1997,
    family: ['ram', 'shyam', 'mohan','sohan'],
    job: 'Developer',
    isMarried: false
};

console.log(uday);
console.log(uday['lastName']);

var x = 'birthYear'
console.log(uday[x]);

uday.job = 'designer';
uday['isMarried'] = true
console.log(uday);

//new Object syntex
var sonu = new Object();
sonu.firstName = 'Sonu';
sonu.birthYear = '2003';
sonu.job = 'Student';
sonu.isMarried = false

console.log(sonu);
