function mergeSort(arr) {
    // Handle invalid input (empty array or non-numeric elements)
    if (!Array.isArray(arr) || arr.length === 0 || arr.some(element => typeof element !== 'number')) {
      return null; // Or throw an error if you prefer
    }
  
    // Base case: single-element array is already sorted
    if (arr.length === 1) {
      return arr;
    }
  
    // Split the array into two halves
    const mid = Math.floor(arr.length / 2);
    const leftHalf = arr.slice(0, mid);
    const rightHalf = arr.slice(mid);
  
    // Recursively sort the halves
    const sortedLeft = mergeSort(leftHalf);
    const sortedRight = mergeSort(rightHalf);
  
    // Merge the sorted halves
    return merge(sortedLeft, sortedRight);
  }
  
  function merge(left, right) {
    const merged = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    // Merge elements while both arrays have items
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        merged.push(left[leftIndex]);
        leftIndex++;
      } else {
        merged.push(right[rightIndex]);
        rightIndex++;
      }
    }
  
    // Append remaining elements from either array (if any)
    merged.push(...left.slice(leftIndex));
    merged.push(...right.slice(rightIndex));
  
    return merged;
  }
  
  // Example usage
  const sampleArray = [34, 7, 23, 32, 5, 62];
  const sortedArray = mergeSort(sampleArray);
  
  console.log('Original array: ${sampleArray}');
  console.log('Sorted array using merge sort: ${sortedArray}');
  // Output:
  // Original array: [34, 7, 23, 32, 5, 62]
  // Sorted array using merge sort: [5, 7, 23, 32, 34, 62]