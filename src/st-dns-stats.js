import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
	const res = {}
  for (let i = 0; i < domains.length; i++ ) {
  	const fields = domains[i].split('.').reverse()
    fields.forEach((el, index) => {
    	const name = '.' + fields.slice(0,index + 1).join('.')
      if ( res[name] ) {
      	res[name] = res[name] + 1
      } else {
      	res[name] = 1
      }
    })
  }
  return res
}
