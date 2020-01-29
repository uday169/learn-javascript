/** Setting if ese statment in swith case */

firstName = 'Uday';
var age = 45;

switch(true){
    case age < 13:
        console.log(firstName + ' is a boy');
        break;
    case age >=13 && age < 18:
        console.log(firstName + ' is a teenager');
        break;
    case age >= 18 && age < 30:
        console.log(firstName + ' is a young Man');
        break;
    default:
        console.log(firstName + ' is a man');

}