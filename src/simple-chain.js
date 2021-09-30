import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  chain: [],
  getLength: function() {
      const res = this.chain
      this.chain = []
      return res.length
  },
  addLink: function(value) {
      const item = String(value).length === 0 || value === undefined ? '( )' : '( ' + value + ' )'
      this.chain.push(item)
      return this
  },
  removeLink: function(pos) {
      if ( typeof(pos) !== 'number' || !this.chain[pos - 1] ) {
        this.chain = [] 
        throw new Error("You can\'t remove incorrect link!") 
      }
      this.chain = this.chain.slice(0, pos - 1).concat(this.chain.slice(pos))
      return this
  },
  reverseChain: function() {
      this.chain = this.chain.reverse()
      return this
  },
  finishChain: function() {
      const res = this.chain
      this.chain = []
      return res.join('~~')
  },
}; 

export default chainMaker