// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function multiplyNums(a, b) {
  return () => {
    return a * b;
  }
}

const theResult = multiplyNums(5,10);

console.log('The result: ', theResult()); // 50


/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
// Return a function that when invoked increments and returns a counter variable.
const counter = (startNum = 0) => {  
  return () => {
    return startNum += 1;
  }
}

const newCounter = counter(5);

console.log(newCounter()); // 6
console.log(newCounter()); // 7


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
// Return an object that has two methods called `increment` and `decrement`.
// `increment` should increment a counter variable in closure scope and return it.
// `decrement` should decrement the counter variable and return it.
const counterFactory = () => {
  let counter = 0;
  let counterObj = {};
  return () => {
    return counterObj = {
      increment: function() {
        return counter += 1;
      },
      decrement: function() {
        return counter -= 1;
      } 
    }
  }  
};

const makeCounter = counterFactory();

const counter1 = makeCounter();
console.log(counter1.increment()); // 1
console.log(counter1.increment()); // 2
console.log(counter1.increment()); // 3
console.log(counter1.decrement()); // 2 
console.log(counter1.decrement()); // 1
console.log(counter1.decrement()); // 0

