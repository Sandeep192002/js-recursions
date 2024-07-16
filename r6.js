function fibonacciRecursive(n) {
    // Base cases (first two Fibonacci numbers)
    if (n <= 1) {
      return n;
    }
  
    // Recursive case (nth Fibonacci number)
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
  }
  
  // Example usage
  const numTerms = 8;
  const fibonacciSequence = [];
  for (let i = 0; i < numTerms; i++) {
    fibonacciSequence.push(fibonacciRecursive(i));
  }
  
  console.log('First ${numTerms} Fibonacci numbers: ${fibonacciSequence}'); // Output: First 8 Fibonacci numbers: [0, 1, 1, 2, 3, 5, 8, 13]