/**
 * You will be given a list of integers, , and a single integer .
 * You must create an array of length  from elements of  such that its unfairness is minimized.
 * Call that array . Unfairness of an array is calculated as
 */

function maxMin(k, arr) {
  const safeArray = arr ?? [];
  //Perfome the algorithim to handle the maxMin
  //Sort the array
  const sortedArray = safeArray.sort((a, b) => a - b);
  //Initialize the result with the minimun value
  let xmin = Number.MAX_SAFE_INTEGER;
  //Loop through the sorted array to length k
  for (let i = 0; i <= sortedArray.length - k; i++) {
    //Check if the current number
    if (arr[i + k - 1] - arr[i] < xmin) {
      xmin = arr[i + k - 1] - arr[i];
    }
  }

  return xmin;
}

console.log(maxMin(2, [1, 2, 3, 4, 10, 20, 30, 40, 100, 200]));
