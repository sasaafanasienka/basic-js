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
// export default function transform(/*arr*/) {
//   throw new NotImplementedError('Not implemented');
// }
export default function transform(arr) {
  if (!Array.isArray(arr)) { throw new Error("'arr' parameter must be an instance of the Array!") }
  const sequences = ['--discard-next', '--discard-prev', '--double-next', '--double-prev']
  let res = []
  for ( let i = 0; i < arr.length; i++ ) {
    if ( !sequences.includes(arr[i]) && arr[i-1] !== '--discard-next' ) {
      res.push(arr[i])
    } else if ( arr[i] === sequences[1] ) {
      res = res.slice(0,-1)
    } else if ( arr[i] === sequences[2] && i != arr.length - 1 ) {
      res.push(arr[i+1])
    } else if ( arr[i] === sequences[3] && i != 0 ) {
      res.push(arr[i-1])
    }
  }
  return res
}
