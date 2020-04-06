/** Truthy and Falsy values */

// falsy values : undefined , null , 0, '' ,NaN
// Truthy values : valus which is not fasly

var weight;

weight = 60;

if (weight || weight === 0){ /** If value is defined of value is zero */
    console.log('Varible is defined');
}
else{
    console.log('Variable has not been defined');

}
