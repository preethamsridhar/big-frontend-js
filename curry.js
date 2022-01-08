/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */
 function curry(fn) {

  return function bound (...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args)
    } else {
      return bound.bind(this, ...args); 
    }
  }

}