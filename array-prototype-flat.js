// There is already Array.prototype.flat() in JavaScript (ES2019), which reduces the nesting of Array.

// Could you manage to implement your own one?

// Here is an example to illustrate

// const arr = [1, [2], [3, [4]]];

// flat(arr)
// // [1, 2, 3, [4]]

// flat(arr, 1)
// // [1, 2, 3, [4]]

// flat(arr, 2)
// // [1, 2, 3, 4]
// follow up

// Are you able to solve it both recursively and iteratively?


/**
 * @param { Array } arr
 * @param { number } depth
 * @returns { Array }
 */
function flat(arr, depth = 1) {
  let result = []
  if (depth >= 0) {
    for (let i = 0; i < arr.length; i ++) {
      if (typeof arr[i] === 'object') {
		const sibling = flat(arr[i], depth - 1)
        result = result.concat(sibling)
      } else {
        result.push(arr[i])
      }
    }
  } else {
    return [arr];
  }
  return result;
}