// scoping


/** here function second can access the function first and the globel scope value var a */
var a = 'Hello!';
first();

    function first() {
        var b = 'Hii!';
        second();

        function second() {
            var c = 'Heyy';

            console.log( a + b + c);
            
        }
    }