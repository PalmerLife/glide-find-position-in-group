window.function = function (series, targetNumber) {
  // Ensure that both inputs are provided and not empty
  if (series.value === undefined || targetNumber.value === undefined) {
    return undefined;
  }

  // Split the series string into an array of numbers
  const numbers = series.value.split(',').map(Number);
  const target = Number(targetNumber.value);

  // Find the index of the target number
  const index = numbers.indexOf(target);

  // Check if the target number is in the series
  if (index === -1) {
    return undefined; // Return undefined if the target number is not found
  }

  // Add one to the index (since indices are 0-based) and return
  return index + 1;
}
