
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let newArr = [];
  if (matrix === undefined) {
    return newArr;
  } else {
  
  if (matrix.length>0){
  for (i=0; i<matrix.length; i++) {
    if (i % 2 ===0) {
      for (j=0; j<matrix[i].length;j++) {
        newArr.push(matrix[i][j])

      }
    } else {
      for (j=0; j<matrix[i].length;j++)
      newArr.push(matrix[i][matrix[i].length-j-1])  
    } 
  }
  return newArr;
  } else {
    return newArr;
  }
  }
  
}


//  let a = towelSort( [
//   [ 1, 2, 3 ],
//   [ 4, 5, 6 ],
//   [ 7, 8, 9 ],
//  ]);
//  console.log(a)