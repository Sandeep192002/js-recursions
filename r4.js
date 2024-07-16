function sumArray(arr) {
    // Handle invalid input (empty array or non-numeric elements)
    if (!Array.isArray(arr) || arr.length === 0 || arr.some(element => typeof element !== 'number')) {
      return null; // Or throw an error if you prefer
    }
  
    let sum = 0;
    for (const num of arr) {
      sum += num;
    }
    return sum;
  }
  
  // Example usage
  const numbers = [1, 2, 3, 4, 5, 6];
  const totalSum = sumArray(numbers);
  
  console.log('The sum of the array is: ${totalSum}'); // Output: The sum of the array is: 21