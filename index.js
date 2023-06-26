const names = ["Kevin", "Mark", "John", "Jane", "Mary"];

//Destructure kevin and mark as indivula variables.
const [kevin, mark, ...rest] = names;

//console.log(kevin, mark, rest);

const persion = {
  name: "James",
  age: 35,
  sex: "male",
};

const { name } = persion;

//console.log(name, persion);

//Given an array, of number < 1000 calculate the sum of all the elements.
//arr = [1,2,3,4,5] = return 15;

const arr = [1000, 6000, 8000, 8000, 10000768523476];

function addAll(arr) {
    //Ini the summ of the array to.
  let sum =0;
  //Loop to the end of the arry adding the current number to the sum
  //0+ 1 = 1 +2 = 3 + 3 = 6 + 5 = 11
  for (let i = 0; i < arr.length; i++) {
        const ith = arr[i];
        sum = sum + ith
  }
  return sum;
}

//console.log(addAll(arr))

//Give tow numbers, a, b return the sum of both 
const a = 10;
const b= 15;

function sum(a,b){
    return a + b;
}

//console.log(sum(a,b));


//Given a string, return the reverse of the string 
// example cow -> woc

// function reverseString(str){
//     //split the string to form an array
//     const splitStr = str.split(' ');
//     console.log(splitStr)
//     //reverse the array uisng the revser method.
//     const reverseStr = splitStr.reverse();
//     console.log(reverseStr)
//     //use join to concat the string together
//     const joinStr = reverseStr.join(' ');
//     return joinStr
// }
function countEqualABRectangles(board) {
  const n = board.length;
  const m = board[0].length;
  const countRectangles = new Array(n).fill(0).map(() => new Array(m).fill(0));

  let numA = 0;
  let numB = 0;

  // count rectangles starting at (0,0)
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] === "A") numA++;
      if (board[i][j] === "B") numB++;

      countRectangles[i][j] = { numA: 0, numB: 0 };

      // check if current cell forms a rectangle with (0,0)
      if (i > 0 && j > 0) {
        const prev = countRectangles[i - 1][j - 1];
        countRectangles[i][j].numA = numA - prev.numA;
        countRectangles[i][j].numB = numB - prev.numB;

        if (countRectangles[i][j].numA === countRectangles[i][j].numB) {
          countRectangles[i][j].numRectangles = 1 + prev.numRectangles;
        } else {
          countRectangles[i][j].numRectangles = prev.numRectangles;
        }
      }
    }
  }

  return countRectangles[n - 1][m - 1].numRectangles;
}


const board = ['AB.', 'B..', '..A'];
const result = countEqualABRectangles(board);
console.log(result); // Output: 5
