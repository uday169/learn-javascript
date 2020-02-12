
// this keyword example

/** 'this' variable only assign value when the object calls the method */
var john = {
    name: 'John',
    yearOfBirth: 1990,
    calcAge: function() {
        console.log(this);
        console.log(2020 - this.yearOfBirth);
    }
}

john.calcAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1985,

}

/** method borrowing ,
 * here mike.calcAge became equal to john.calcAge */

mike.calcAge = john.calcAge;  

mike.calcAge();