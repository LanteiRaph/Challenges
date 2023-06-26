// Help to iterate through array and string.

//cal culate the sum of 1 - 10

// var number = 1;

// var sum = 0;

// while(number <= 11) {
//     //0 = 0 + 1;
//     sum = sum + number;
//     //0 sum 0+1
//     sum += number;// agumented

//     //1 = number + 1 2 3, 4,5,6,7,8,9, 10, 11
//     //number = number + 1;
//     ++number
// }

// function gradingStudents(grades) {
//   // Write your code here
//   const gradeArr = [];
//   for (let i = 0; i < grades.length; i++) {
//     const mul = Math.ceil(grades[i] / 5) * 5;

// if(mul - grades[i] < 3 && grades[i] >= 38){
//     gradeArr.push(mul)
// }else{
//     gradeArr.push(grades[i])
// }
//   }

//   return gradeArr;
// }

// console.log(gradingStudents([73, 67, 38, 33]));

function countngVallys(steps,path) {
  // Write your code here
  let strArr = path.split("");
  let altitide = 0;
  let result = 0;
  for (let step = 0; step < steps; step++) {
    if (altitide == 0 && strArr[step].toLowerCase() == "d") {
      altitide -= 1;
      result += 1;
    } else if (strArr[step].toLowerCase() == "d") {
      altitide -= 1;
    } else {
      altitide += 1;
    }
  }
  return result;
}

console.log(countngVallys(8, 'DDUUUUDD'))
