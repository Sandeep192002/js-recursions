function factorialRecursive(n) {
    // Base case: factorial of 0 is 1
    if (n === 0) {
      return 1;
    }
  
    // Recursive case: n! = n * (n - 1)!
    return n * factorialRecursive(n - 1);
  }
  
  // Example usage
  const number = 5;
  const result = factorialRecursive(number);
  
  console.log('The factorial of ${number} is: ${result}'); // Output: The factorial of 5 is: 120