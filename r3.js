function range(x, y) {
    // Handle invalid input (swapped or equal values)
    if (x > y) {
      return []; // Empty array for invalid range
    }
  
    const result = [];
    for (let i = x; i <= y; i++) {
      result.push(i);
    }
    return result;
  }
  
  // Example usage
  const lowerBound = 2;
  const upperBound = 9;
  const numbersInRange = range(lowerBound, upperBound);
  
  console.log('Integers in range (${lowerBound}, ${upperBound}): ${numbersInRange}'); // Output: Integers in range (2, 9): [2, 3, 4, 5, 6, 7, 8, 9]