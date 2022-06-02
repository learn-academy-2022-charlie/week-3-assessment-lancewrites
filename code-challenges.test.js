// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

describe("fibIt", () => {
    it("takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.", () => {
        expect(fibIt(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
        expect(fibIt(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    })
})

const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]


            // FAIL  ./code-challenges.test.js
            // fibIt
            //   ✕ takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence. (2 ms)
            // ● fibIt › takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.
            //   ReferenceError: fibIt is not defined


// b) Create the function that makes the test pass.

//Create a function called fibIt that takes in a number greater than 2 that will determine the length of the output array.

        function fibIt  (number)  {
            //if the number passed as an argument is greater than 2...
        if(number > 2){
            //create a variable that shows an array of the first two, non-zero numbers in the Fibonacci sequence that acts as a starting point
                let fi = [1, 1]
                //create a for loop that iterates until it reaches the number entered as the function's argument.
                for(let i = 2; i<number; i++){
                    //for each iteration, the new value is equal to the sum of the previous two values
                fi[i] = fi[i-2] + fi[i-1]
                }
                return fi
            }    
        }      
            // PASS  ./code-challenges.test.js
            // fibIt
            //   ✓ takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence. (2 ms)  
       
    
    


// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

describe("numSort", () => {
    it("takes in an array and returns a new array of only odd numbers sorted from least to greatest.", () => {
        expect(numSort(fullArr1)).toEqual([-9, 7, 9, 199])
        expect(numSort(fullArr2)).toEqual([-823, 7, 23])
    })
})


const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

            // FAIL  ./code-challenges.test.js
            // numSort
            //   ✕ takes in an array and returns a new array of only odd numbers sorted from least to greatest. (1 ms)
            // ● numSort › takes in an array and returns a new array of only odd numbers sorted from least to greatest.
            //     ReferenceError: numSort is not defined

// b) Create the function that makes the test pass.

        //Create a function called numSort that takes in an array as an argument for the parameter
        const numSort = (array) => {
            //Assign newArray the value of the input array after filtering out number data types that are odd
            let newArray = array.filter(value => {
            return typeof value === "number" && value%2 !== 0
        })
            //return newArray sorted with the numbers organized from smallest to greatest.
            return newArray.sort(function(a, b){return a-b})
        }

        // PASS  ./code-challenges.test.js
        // fibIt
        //   ✓ takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence. (12 ms)
        // numSort
        //   ✓ takes in an array and returns a new array of only odd numbers sorted from least to greatest. (1 ms)

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

describe("sumArray", () => {
    it("takes in an array and returns an array of the accumulating sum.", () => {
        expect(sumArray(numbersToAdd1)).toEqual([2, 6, 51, 60])
        expect(sumArray(numbersToAdd2)).toEqual([0, 7, -1, 11])
        expect(sumArray(numbersToAdd3)).toEqual([])
    })
})

const numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

const numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

const numbersToAdd3 = []
// Expected output: []

            // FAIL  ./code-challenges.test.js
            // sumArray
            //   ✕ takes in an array and returns an array of the accumulating sum. (3 ms)
            // ● sumArray › takes in an array and returns an array of the accumulating sum.
            //   ReferenceError: sumArray is not defined

// b) Create the function that makes the test pass.

//create a function called sumArray that takes in an array as an argument for the parameter
const sumArray = (array) => {
    //create a variable called newArr that will contain the output array
    let newArr = []
    //itereate through each index of the input array except for the first index
    for(let i=1; i<array.length; i++){
        //the value of each index in newArr will be the value of the input array at the current index plus the value of the input array at the previous index
     newArr.push(array[i] += array[i -1])
    }
    //add the value of the input array at the zeroth index to the beginning of newArr
     newArr.unshift(array[0])
     return newArr
   }

        //    PASS  ./code-challenges.test.js
        //    fibIt
        //      ✓ takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence. (12 ms)
        //    numSort
        //      ✓ takes in an array and returns a new array of only odd numbers sorted from least to greatest. (1 ms)
        //    sumArray
        //      ✓ takes in an array and returns an array of the accumulating sum.