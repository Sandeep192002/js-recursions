function calculateExponent(base, exponent) {
    // Handle invalid input (negative base with non-integer exponent)
    if (base < 0 && !Number.isInteger(exponent)) {
      return null; // Or throw an error if you prefer
    }
  
    // Handle zero base and zero exponent cases
    if (base === 0 && exponent === 0) {
      return 1; // 0 raised to the power of 0 is 1 (convention)
    } else if (base === 0) {
      return 0; // Any non-zero number raised to the power of 0 is 0
    }
  
    let result = 1;
    for (let i = 0; i < exponent; i++) {
      result *= base;
    }
    return result;
  }
  
  // Example usage
  const baseNumber = 2;
  const power = 3;
  const exponentResult = calculateExponent(baseNumber, power);
  
  console.log('${baseNumber} to the power of ${power} is: ${exponentResult}'); // Output: 2 to the power of 3 is: 8