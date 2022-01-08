/**
 * interface Matcher {
 *  toBe(data: any): void
 * }
 */
/**
 * @param {any} input
 * @returns {Matcher & {not: Matcher}}
 */
 function myExpect(input) {
  // your code here
  let isNot = false
  return {
    get not() {
      isNot = true;
      return this
    },
    toBe: function (value) {
      if(!isNot) {
        if (Object.is(value, input)) {
          return true
        } else {
          throw new Error('not match')
        } 
      } else {
        if (Object.is(value, input)) {
          throw new Error('not match')
        } else {
          return true
        }
      }
    }
  }
}


