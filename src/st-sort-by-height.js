import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
	const staticEls = arr.map((el, index) => el == -1 ? index : null ).filter(el => el !== null)
  const sorted = arr.filter(el => el != -1).sort((a,b) => {return a - b})
	const res = []
  for ( let i = 0; i < arr.length; i++) {
		if (staticEls.includes(i)) {
    	res.push(-1)
    } else {
    	res.push(sorted[0])
      sorted.shift()
    }  
  }
  return res
}
