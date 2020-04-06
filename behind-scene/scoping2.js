// Scoping

/** Here function can only access the global scope var a and the var d which is inside 
 * its function.
 */

var a = 'Hello!';
first();

    function first() {
        var b = 'Hii!';
        second();

        function second() {
            var c = 'Heyy';
            third();
            
        }
    }
    function third(){
        var d = 'How are You ?'
        console.log(a + d);
    }  