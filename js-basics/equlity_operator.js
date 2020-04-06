/** Equality Operator */

/** The == operaor does type coercion ! and  === operator is strict equlity operator 
 * it means in this example if height is 23 then == operator convert it to number form string and then compare it. but if === operator used then it is strict it compare string to number which is not equal.
 */

var height = 23;

if (height == '23'){
    console.log('The == operaor does type coercion ! and  === operator is strict equlity operator');
}

