

/**
 * @param {string} input
 * @returns string
 */
 function removeChars(input) {
  // your code here
  let result = []
  for (let i = 0; i < input.length; i ++) {
    if (input[i] === 'c' && result[result.length - 1] === 'a') {
      result.pop('a')
    } else if (input[i] !== 'b') {
      result.push(input[i])
    }
  }
  return result.join('')
}

removeChars('a') // 'a'
removeChars('abc') // ''
removeChars('cabbaabcca') 