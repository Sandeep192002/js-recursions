function isEven(number) {
    // Handle non-numeric input
    if (typeof number !== 'number') {
      return null; // Or throw an error if you prefer
    }
  
    // Use the remainder operator (%) for efficient even/odd check
    return number % 2 === 0;
  }
  
  // Example usage
  const num = 10;
  const isEvenResult = isEven(num);
  
  console.log('${num} is even: ${isEvenResult}'); // Output: 10 is even: true