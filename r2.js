function gcd(a, b) {
    // Handle invalid input (non-positive numbers)
    if (a <= 0 || b <= 0) {
      return null; // Or throw an error if you prefer
    }
  
    // Euclidean algorithm: repeatedly divide the larger number by the smaller 
    // and take the remainder as the new dividend. GCD is the last non-zero remainder.
    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }
  
    return a; // The last non-zero remainder is the GCD
  }
  
  // Example usage
  const num1 = 12;
  const num2 = 18;
  const greatestCommonDivisor = gcd(num1, num2);
  
  console.log('GCD of ${num1} and ${num2} is: ${greatestCommonDivisor}'); // Output: GCD of 12 and 18 is: 6