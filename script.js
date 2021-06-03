// Learning how to work with and manipulate arrays is very important to understand when learning JavaScript
// JavaScript arrays are used to store multiple values in a single variable.
// An array is a special variable, which can hold more than one value at a time.
// Remember that arrays are declared as variables like so:

var numbersArr = [1, 2, 3, 4];

// We have declarred a variable with the value of an array with 4 integers in it; 1, 2 ,3 and 4.
// Lets console.log the array and see what it looks like.
// Unccoment the code below:

// console.log(numbersArr);


// Now lets look at how to access elements of an array.
// You access an array element by referring to the index number.
// Uncomment the line below:

// console.log(numbersArr[0]);


// The FIRST element of an array is ALWAYS ZERO. 
// We can also acces the LAST element of an array like so.
// Uncomment the line below:

// console.log(numbersArr[-1]);


// referencing an array with "-1" will give us the last element in that array.

// We can also use the ".length" method to return the the number of elements in an array
// Uncomment the line below:

// console.log(numbersArr.length);


// There are more uses for the .length method, research on your own to learn about them.

// Now lets talk about manipulating and using arrays.
// The most common method for manipulating arrays is by using a "for loop"
// Loops can execute a block of code a number of times.
// Loops are handy, if you want to run the same code over and over again, each time with a different value.
// The for loop has the following syntax:

for (var index = 0; index < numbersArr.length; index++) {
    // code block to be executed
};


// Lets break this down:
// We declare a loop by starting our line with "for" followed by "()".
// Inside our parentheses we want to add three sections of code
// Our first section "var index = 0;" is declaring a variable named "index" and setting its value to "0"
// Our second section is a comparison or "boolian" expression. We will generally use the length of the
// array we are working with for comparison.
// We then increase the value of "index" by 1

// Remember our "index" is just a declared variable, we can name it anything we want. From now one, for brevity,
// we will name it "i".
// The first section acts as a counter. It will keep track of the number of times the loop is executed
// The second section compares our counter (our variable named "index") to the total number of elements in that array.
// If the counter is equal to or greater than the length of the array our loop will finish running.
// The third section will add 1 to our counter to keep track of how many times we have gone through our loop.

// Now that we have an understanding of the structure of a for loop lets check out some examples.

// This loop will let us know, in the console, everytime a loop is run and which loop iteration we are on.
// Uncomment the code below:

// for (let i = 0; i < numbersArr.length; i++) {
//     console.log("This is loop iteration #" + i)
// };


// Instead of using the length of an array for a comparison we can simply use a number. Although, there are very few times where we will want to use a number
// instead of the length of an array in a for loop.

// Now lets make a for loop that tells us what the value of each element of the array is.
// Uncomment the code below:

// for (let i = 0; i < numbersArr.length; i++) {
//     console.log("The value of index " + i + " in the array is " + numbersArr[i])
// };


// Notice that instead of calling a specific element of the array (array[1]) we used our counter instead (array[i]). Remember that out counter has
// a numeric value that we can then use to call each element of the array from first to last.

// Now that we know how to use loops lets start manipulating the elements of our arrays.
// Uncomment the code below:

// console.log("Original array: ", numbersArr);
// for (let i = 0; i < numbersArr.length; i++) {
//     console.log("The original element value at index " + i + " is " + numbersArr[i]);
//     numbersArr[i]++;
//     console.log("The new element value at index " + i + " is " + numbersArr[i]);
// };
// console.log("Modified Array: ", numbersArr);


// We start by looking at the values of each element of the array. 
// We then console.log each index before being modified. 
// Next we modify that index by adding 1 to its original value.
// Then we console.log the new value of that index once it is modified.
// After our loop runs we then see a console.log of the new values of the modified array.

// Keep in mind that arrays can hold many types of objects and variables inside of them.
// For instance, lets declare some variables and then run a loop to check the value of those variables.

var num = 3;
var str = "hello world";
var letterArr = ["a", "b", "c", "d"]

var mixedArr = [num, 27, str, "howdy", letterArr, [1, 2, 3, 4]];

// Lets console.log this mixedArr and see all of its elements. Click on the arrow before the "(6)" in your dev tools 
// console to expand the array and view all of it's elements.
// Uncomment the line below:

// console.log(mixedArr);


// That's right! Arrays can hold other arrays, as well!
// We can call elements of arrays that are "nested" in arrays like so.
// Uncomment the line below:

// console.log(mixedArr[5][1]);


// Arrays inside of arrays are called "nested arrays" or "multidimensional arrays"
// We called the value of the 5th element of the array (remember array elements start at "0") and then called the 1st
// element of the nested array to get the value of "2"

// Now lets look at adding and removing elements to and from an array.
// We will be using the ".push" method to add elements to the END of an array like so.
// Uncomment the code below:

// console.log("Original array: ", numbersArr);
// numbersArr.push(5);
// console.log("New array with an added element at the end: ", numbersArr);


// You can add any element you want using the ".push" method. You can even add multiple elements at a time like so.
// Uncomment the code below:

// console.log("Original array: " + numbersArr);
// numbersArr.push(5, 6, 7, 8);
// console.log("New array with an added element at the end: " + numbersArr);


// We will now use the ".pop" method to remove the last item of an array.
// Uncomment the code below:

// console.log("Orignial array: ", numbersArr);
// numbersArr.pop();
// console.log("New array with the last element removed: ", numbersArr);


// Now lets put together everything we've learned to make a loop that checks if an element of an array is even.
// If it is even, we will push that number into a new array. If the element it is odd we will "continue" the loop
// skipping that iteration and going to the next one. If the element's type is not a number we will "break" out
// of the loop.

// This is how we declare an empty array to be filled later
var newNumArr = [];

// Lets do this all inside a function.

function checkEven(oldArr, newArr) {
    newArr = []; // Here we reset the newArr argument to be an empty array
    for (let i = 0; i < oldArr.length; i++) {

        if (typeof oldArr[i] !== "number") { // We use "typeof" to check the typing of the current element we are on 
            // If its type is not a number (if it is a string, or array, etc) we will send a warning to the console and break out of the loop.
            // We also use the "!==" operand which will check if the value of the current element IS NOT a number

            console.log("WARNING!!! The current element is a " + typeof oldArr[i]);
            console.log("WARNING!!! You must use an array that only has numbers!");

            break   // break will stop the loop completely and move on to the rest of the function

        } else if (oldArr[i] % 2 === 0) {  // in this if statement we use a "modulus" or the % operand to check if the element is even, or divisible by 2

            newArr.push(oldArr[i]);

            console.log(oldArr[i] + " is even and was added to the new array: ", newArr);

        } else {   // Since we know if the number is even or odd by this point, we can finish with an else statement that continues the loop

        console.log(oldArr[i] + " is not an even number.");

        continue   // continue will skip the rest of the current loop iteration and move onto the next one
            
        }
    }
    return console.log("Your new array: ", newArr);
};


// Now that we have an empty array and a function set up, lets call it and see what happens
// Uncomment the line below:

// checkEven(numbersArr, newNumArr);


// Now lets try our function with our mixed array and see what happens.
// Uncomment the line below:

// checkEven(mixedArr, newNumArr);