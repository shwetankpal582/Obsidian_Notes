// const currentDate = new Date();
// console.log(currentDate.getMonth() + 1); // Months are 0-indexed, so we add 1 to get the correct month number
// console.log(currentDate.getDate());
// console.log(currentDate.getFullYear());
// console.log(currentDate.getHours());

function calculatesum() {
    let a = 0;
    for (let i = 0; i < 10000000000; i++) {
        a += i[i];
    }   
    return a;
}

const beforedate = new Date();
const BeforeTimeInMs = beforedate.getTime();
calculatesum();

const afterdate = new Date();
const AfterTimeInMs = afterdate.getTime();  
const timeDiff = AfterTimeInMs - BeforeTimeInMs;
console.log("Time taken to execute the function: " + timeDiff + " milliseconds");