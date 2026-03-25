function isSameType(value1, value2) {
  // Convert to number if possible
  let num1 = Number(value1);
  let num2 = Number(value2);

  // Check NaN case
  if (Number.isNaN(num1) && Number.isNaN(num2)) {
    return true;
  }

  if (Number.isNaN(num1) || Number.isNaN(num2)) {
    return false;
  }

  // If both are valid numbers
  return typeof num1 === typeof num2;
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));