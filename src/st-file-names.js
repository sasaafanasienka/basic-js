import { NotImplementedError } from '../extensions/index.js';

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
export default function renameFiles(names) {
	let res = []
  for ( let i=0; i < names.length; i++ ) {
  	const baseName = names[i]
    const repeats = names.slice(0,i).filter(el => { return el === names[i]}).length
    const firstAdd = !repeats ? '' : '(' + repeats + ')'
    const repeats2 = res.filter(el => { return el === names[i] + firstAdd}).length
    const secondAdd = !repeats2 ? '' : '(' + repeats2 + ')'
  	res.push(baseName.concat(firstAdd, secondAdd))
  }
  return res
 }
