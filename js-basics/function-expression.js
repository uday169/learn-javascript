/** Function expresson  */

var whatDoYouDo = function(job, firstName){
    switch(job){
        case 'teacher':
        case 'instuctor':
            return firstName + ' teaches student how to code';
    
        case 'driver':
            return  firstName + ' drives the car in india';
    
        case 'designer':
            return firstName + ' design the awesome websites';
            
        default:
            return firstName + ' do soneting else';   
    }          
}

console.log(whatDoYouDo('teacher', 'Uday'));
console.log(whatDoYouDo('designer', 'Sohan'));
console.log(whatDoYouDo('builder', 'Krishna'));