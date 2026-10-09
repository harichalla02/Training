/*  Rest parameters allow a function to accept an indefinite number of arguments as an array.
    The rest parameter syntax uses three dots (...) followed by a parameter name.
    It collects all remaining arguments into an array. */


function total(...numbers)
{
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    console.log(`[${numbers.join(", ")}]`);
    console.log(`Total: ${sum}`);
}
total(10, 20, 30, 40, 50, 60, 70, 80, 90, 100);