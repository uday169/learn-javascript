// Function Constructor


var Person = function(name,yearOfBirth,job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calcAge = function () {
    console.log(2020-this.yearOfBirth);
}

var uday = new Person('Uday', 1997, 'Engineer');
var rohan = new Person ('Rohan',1995, 'Teacher');
var raju = new Person ('Raju',2000, 'Builder');

uday.calcAge();
rohan.calcAge();
raju.calcAge();
