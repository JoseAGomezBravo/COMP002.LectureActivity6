myGrades = [100, 100, 90, 73, 78, 94, 86];

myAverage = 0;

for (let i = 0; i < myGrades.length; i++) {

myAverage += myGrades[i];

}

myAverage = myAverage / myGrades.length;

console.log("My grade average is " + myAverage);

//There were two bugs within the code, those being i=1 and i<= myGrades.length. 
//I fixed them by setting i = 0 therefore allowing the loop to go through the whole array, and by removing the equal sign from <=.

class InvalidNumberError extends Error {
    constructor(message)
    {
        super(message);
        this.name = "InvalidNumberError"
    }
}


function validNumber (input)
{
    if (typeof input !== "number" || isNaN(input))
    {
        throw new InvalidNumberError("Input must be a number.");
    }
    if (input < 0 || input > 100)
    {
        throw new InvalidNumberError("Input must be a number between 0 and 100.");
    }
    return input;
}

const userInput= 89;
try 
{
    const validatedNumber = validNumber(userInput);
    console.log("Input is valid:", validatedNumber);
} 
catch (error)
{
if (error instanceof InvalidNumberError)
{
console.error("Invalid Number Error", error.message);
}
else {
    console.error("An unexpected error occurred", error.message);
}
}