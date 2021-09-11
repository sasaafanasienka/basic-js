import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  let res = []
  for ( let i = 0; i < arr.length; i++ ) {
    if ( typeof(arr[i]) === 'number' ) {
      res.push(arr[i])
    } else if ( arr[i] === '--double-next' ) {
      res.push(arr[i+1])
    } else if ( arr[i] === '--double-prev' ) {
      res.push(arr[i-1])
    } else if ( arr[i] === '--discard-prev' ) {
      res = res.slice(0,-1)
    } else if ( arr[i] === '--discard-prev' ) {
      i++
    }
  }
  return res
  //throw new NotImplementedError('Not implemented');
}
