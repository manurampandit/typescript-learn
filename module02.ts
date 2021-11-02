/**
 * The primitive types are the boolean, number, string, void, null, and undefined types along with user-defined enumeration or enum types.
 * The void type exists purely to indicate the absence of a value, such as in a function with no return value.
 * The null and undefined types are subtypes of all other types. It is not possible to explicitly reference the null and undefined types.
 * Only the values of those types can be referenced, using the null and undefined literals.
 */

// primitive types
// boolean 
// number and bigint (appended by n in the end)
let x: number;
let y = 0;
let z: number = 123.456;
let big: bigint = 100n;

// string

// void, null, and undefined types

// enum type - custom type

enum ContractStatus {
    Permanent,
    Temp,
    Apprentice
}

let employeeStatus: ContractStatus = ContractStatus.Apprentice;
console.log(employeeStatus); // value is 2  (output 2)
// enum starts from 0 
// in above example ContractStatus.Permanent = 0, Temp = 1, Apprentice = 2
console.log(ContractStatus[employeeStatus]); // logs "Apprentice"

/**
 * The core difference between any and unknown is you are unable to interact with a variable of type unknown; 
 * doing so generates a compiler error. any bypasses any compile-time checks, 
 * and the object is evaluated at runtime; if the method or property exists it will behave as expected.
 */
//  let randomValue: unknown = 10;
//  randomValue = true;
//  randomValue = 'Mateo';
 
//  console.log(randomValue.name);  // Error: Object is of type unknown
//  randomValue();                  // Error: Object is of type unknown
//  randomValue.toUpperCase();      // Error: Object is of type unknown

 //Type assertion (or read as type casting)
 /**
Type assertions have two forms. One is the as-syntax:

(randomValue as string).toUpperCase();

The other version is the "angle-bracket" syntax:

(<string>randomValue).toUpperCase();
*/

let randomValue: unknown = 10;

randomValue = true;
randomValue = 'Mateo';

if (typeof randomValue === "string") {
    console.log((randomValue as string).toUpperCase());    //* Returns MATEO to the console.
} else {
    console.log("Error - A string was expected here.");    //* Returns an error message.
}

/**
 * 
  Type	Predicate
string	typeof s === "string"
number	typeof n === "number"
boolean	typeof b === "boolean"
undefined	typeof undefined === "undefined"
function	typeof f === "function"
array	Array.isArray(a)
 */

// Union types |
// also read as either or - either number or boolean at a time
let multiType: number | boolean; 
multiType = 20;         //* Valid
multiType = true;       //* Valid
// multiType = "twenty";   //* Invalid

// Intersection types
interface Employee {
    employeeID: number;
    age: number;
  }
  interface Manager {
    stockPlan: boolean;
  }
  type ManagementEmployee = Employee & Manager;
  let newManager: ManagementEmployee = {
      employeeID: 12345,
      age: 34,
      stockPlan: true
  };

// defining literal types (string, number, boolean)
type testResult = "pass" | "fail" | "incomplete";
let myResult: testResult;
myResult = "incomplete";    //* Valid
myResult = "pass";          //* Valid
// myResult = "failure";       //* Invalid

// Collection types
// 1. Array
// let list: number[] = [1, 2, 3];
// or
// let list: Array<number> = [1, 2, 3];

// Tuples
// let person1: [string, number] = ['Marcia', 35];
// let person1: [string, number] = ['Marcia', 35, true]; // error (on adding another value)
/*  EXERCISE 1
    TODO: Modify the code to add types to the variable declarations. 
    The resulting JavaScript should look the same as the original example when you're done. */

    let firstName: string;
    let lastName: string;
    let fullName: string;
    let age: number;
    let ukCitizen: boolean;
    
    firstName = 'Rebecca';
    lastName = 'Smith';
    age = 42;
    ukCitizen = false;
    fullName = firstName + " " + firstName;
    
    if (ukCitizen) {
        console.log("My name is " + fullName + ", I'm " + age + ", and I'm a citizen of the United Kingdom.");
    } else {
        console.log("My name is " + fullName + ", I'm " + age + ", and I'm not a citizen of the United Kingdom.");
    }
    
    /* EXERCISE 2
   TODO: Run the code as is and then modify it to have strongly typed variables. 
   Then, address any errors you find so that the result returned to a is 12. */

// let x:number;
// let y;
// let a;

// x = 'five';
// y = 7;
// a = x + y;

// console.log(a);

/* EXERCISE 3
   TODO: In the following code, implement an enum type called Season that represents 
   the constants "Fall", "Winter", "Spring", and "Summer". Then, update the function so 
   you can pass in the season by referencing an item in the enum, for example 
   Season.Fall, instead of the literal string "Fall". */
enum Season {
    Fall,
    Winter,
    Spring,
    Summer
}
function whichMonths(season: Season) {
    let monthsInSeason: string;
    switch (season) {
        case Season.Fall:
            monthsInSeason = "September to November";
            break;
        case Season.Winter:
            monthsInSeason = "December to February";
            break;
        case Season.Spring:
            monthsInSeason = "March to May";
            break;
        case Season.Summer:
            monthsInSeason = "June to August";
    }
    return monthsInSeason;
}

console.log(whichMonths(Season.Fall));