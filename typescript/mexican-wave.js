/*In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You
will be passed a string and you must return that string in an array where an uppercase letter is a
person standing up.
Rules
 1.  The input string will always be lower case but maybe empty.

 2.  If the character in the string is whitespace then pass over it as if it was an empty seat
EXAMPLE
wave("hello") => {"Hello", "hEllo", "heLlo", "helLo", "hellO"}
-----------------------------------------------------------------------------------------------------*/
function wave(str) {
    var toArray = [];
    for (var i = 0; i < str.length; i++) {
        var letra = str[i];
        if (letra === " ") {
            continue;
        }
        else {
            toArray.push(str.slice(0, i) + letra.toUpperCase() + str.slice(i + 1));
        }
    }
    return toArray;
}
console.log(wave("hello"));
