function binarySearch(arr, target) {
    // Handle invalid input (empty array or non-numeric elements)
    if (!Array.isArray(arr) || arr.length === 0 || arr.some(element => typeof element !== 'number')) {
      return null; // Or throw an error if you prefer
    }
  
    // Sort the array in ascending order (binary search requires a sorted array)
    arr.sort((a, b) => a - b);
  
    let start = 0;
    let end = arr.length - 1;
  
    // Binary search loop
    while (start <= end) {
      const mid = Math.floor((start + end) / 2);
  
      if (arr[mid] === target) {
        return mid; // Target found at index mid
      } else if (arr[mid] < target) {
        start = mid + 1; // Search in the right half
      } else {
        end = mid - 1; // Search in the left half
      }
    }
  
    // Target not found
    return null;
  }
  
  // Example usage
  const sampleArray = [0, 1, 2, 3, 4, 5, 6];
  const targetElement = 5;
  const index = binarySearch(sampleArray, targetElement);
  
  if (index !== null) {
    console.log('Target element "${targetElement}" found at index: ${index}');
  } else {
    console.log('Target element "${targetElement}" not found in the array.');
  }
  // Output: Target element "5" found at index: 5