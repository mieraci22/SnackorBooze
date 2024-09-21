function unroll(squareArray) {
    let result = [];
  
    if (!squareArray || squareArray.length === 0) {
      return result;
    }
  
    let top = 0;
    let bottom = squareArray.length - 1;
    let left = 0;
    let right = squareArray[0].length - 1;
  
    while (top <= bottom && left <= right) {
      // Traverse from left to right
      for (let i = left; i <= right; i++) {
        result.push(squareArray[top][i]);
      }
      top++;
  
      // Traverse from top to bottom
      for (let i = top; i <= bottom; i++) {
        result.push(squareArray[i][right]);
      }
      right--;
  
      if (top <= bottom) {
        // Traverse from right to left
        for (let i = right; i >= left; i--) {
          result.push(squareArray[bottom][i]);
        }
        bottom--;
      }
  
      if (left <= right) {
        // Traverse from bottom to top
        for (let i = bottom; i >= top; i--) {
          result.push(squareArray[i][left]);
        }
        left++;
      }
    }
  
    return result;
  }
  
  module.exports = unroll;