import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
	if (!str) { return '' }
	return str.split('').reduce((prev,cur,index) => {
  	return index == 0 || cur === str[index - 1] ? prev + cur : prev + '!' + cur
  }).split('!').map(el => el.length == 1 ? el[0] : el.length + el[0]).join('')
}
