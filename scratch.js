/* eslint-disable no-console, no-unused-vars */
// import './tests/_ignore/_error.js'
import nlp from './src/three.js'
// nlp.verbose('tagger')

// ''
// ''
// ''

let m = nlp("i said, 'did you have to do that' and then left, like nothing happened (which it didn't).")
  .clauses()
  .debug()
// let sub = m.match('is')
// sub.insertAfter('really')
// console.log(m.text() + '|')
// let m = nlp('the dog sat down quickly')
// m.verbs().debug()
// m.debug()

// str = 'retail [stores]'
// let doc = nlp('one two three. three four five.').forEach(p => {
//   p.toUpperCase()
// })
// doc.debug()

// console.log(nlp.parseMatch(null))

/*
['', '#'],
['', '#'],
['', '#'],
*/

/*

> One
.compute(normal)

> Two
Insert/replace

> Three
.compute([root,  numbers, dates])
methods.compute.root(terms)

* Use suffix-thumb runner for transformations
* Figure-out phrase tagging 


*/
