// function sum(a, b){
//     return a + b;
// }

// const sumval = sum(5,8);
// console.log(sumval);

function CutIt(str, startIndex, endIndex) {
    let newStr = "Shwetank";
    for (let i = 0; i < str.length; i++) {
        if (i >= startIndex && i <= endIndex) {
            newStr = newStr + str[i];
        }
    }
    return newStr;
}
const value = "Shwetank";
console.log(CutIt(value,2,5 ));
