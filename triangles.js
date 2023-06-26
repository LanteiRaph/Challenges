// function countTrianglesInPolygon(n) {
//     return (n - 2) * (n - 1) / 2;
//   }

//   // Replace `6` with the number of sides in your polygon
//   const numOfTriangles = countTrianglesInPolygon(8);

//   console.log(`There are ${numOfTriangles} triangles in the polygon.`);

// function percentageError(actualValue, estatimatedValue) {
//   //
//   const percentageError =
//     ((estatimatedValue - actualValue) / actualValue) * 100;

//   return percentageError;
// }

// console.log(percentageError(120, 90));



function calculateFrustumVolume(H, R, r) {
    const volume = (1/3) * Math.PI * H * (Math.pow(R, 2) + R * r + Math.pow(r, 2));
    return volume;
  }


  console.log(calculateFrustumVolume(63, 25, 15));