import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
  
  constructor(method) {
    this.method = method
  }

  encrypt(string, keyword) {

    if ( !string || !keyword ) {
      throw new Error('Incorrect arguments!')
    }

    const encryptSymbol = (...args) => {
      const symbols = [...args].map(el => el.toUpperCase())
      const res = (symbols[0].charCodeAt() + symbols[1].charCodeAt() - 130) % 26
      return String.fromCharCode(res + 65)
    }
  
    const klength = keyword.length
    const str = string.toUpperCase()
    const key = Array(Math.ceil(str.length / klength)).fill(keyword.toUpperCase()).join('')
    let j = 0;
    let res = ''
    for ( let i = 0; i < str.length; i++ ) {
      if ( /[A-Z]/.test(str[i]) ) {
        res = res.concat(encryptSymbol(str[i], key[j]))
        j++
      } else {
        res = res.concat(str[i])
      }
    }
    return this.method === false ? res.split('').reverse().join('') : res
  }

  decrypt(string, keyword) {

    if ( !string || !keyword ) {
      throw new Error('Incorrect arguments!')
    }

    const decryptSymbol = (...args) => {
      const symbols = [...args].map(el => el.toUpperCase())
      const res = (symbols[0].charCodeAt() - symbols[1].charCodeAt() + 130) % 26
      return String.fromCharCode(res + 65)
    }
  
    const klength = keyword.length
    const str = string.toUpperCase()
    const key = Array(Math.ceil(str.length / klength)).fill(keyword.toUpperCase()).join('')
    let j = 0;
    let res = ''
    for ( let i = 0; i < str.length; i++ ) {
      if ( /[A-Z]/.test(str[i]) ) {
        res = res.concat(decryptSymbol(str[i], key[j]))
        j++
      } else {
        res = res.concat(str[i])
      }
    }
    return this.method === false ? res.split('').reverse().join('') : res
  }

}