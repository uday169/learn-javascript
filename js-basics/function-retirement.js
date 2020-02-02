/** calculate year and also calculate the how many year person will retire */


function calculateAge(birthYear){
    return 2020 - birthYear;
}

var ageUday = calculateAge(1997);
var ageRohan = calculateAge(1994);
var ageRaj = calculateAge(1990);

console.log(ageUday, ageRohan , ageRaj);

function yearUntilRetirement(year, firstName){
    var age = calculateAge(year);
    var retirement = 65 - age;

    if (retirement > 0 ){
        console.log(firstName+ ' will retire in ' +retirement+ ' years.');
    }
    else{
        console.log(firstName+ ' is already retired');
    }
}

yearUntilRetirement(1997 ,'Uday');
yearUntilRetirement(1950 ,'Rahul');
yearUntilRetirement(1970 ,'Manoj');