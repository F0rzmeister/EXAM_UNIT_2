
// arrayUtils.js

// Flattens a nested array structure
function flattenArray(arr) {
  let result = [];
  function recursiveFlatten(subArray) {
    for (let item of subArray) {
      if (Array.isArray(item)) {
        recursiveFlatten(item);
      } else {
        result.push(item);
      }
    }
  }
  recursiveFlatten(arr);
  return result;
}

export { flattenArray };
