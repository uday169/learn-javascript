// Object create

var PersonProto = {
    calcAge: function () {
        console.log(2020-this.yearOfBirth);
    }
}; 

var uday = Object.create(PersonProto);

uday.name = 'Uday';
uday.yearOfBirth = 1997;
uday.job = 'Engineer';

var rohan = Object.create(PersonProto,
    {

    name: {value: 'Rohan'},
    yearOfBirth: {value: 1990},
    job: {value: 'Teacher'}

});