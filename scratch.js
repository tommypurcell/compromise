/* eslint-disable no-console, no-unused-vars */
import nlp from './src/three.js'
// import plg from './plugins/dates/src/plugin.js'
// nlp.plugin(plg)

// nlp.verbose('tagger')

let arr = [


  // 'poviding care',
  'We take walks in the park.',
  'the tree will grow',
  'They listen to music on their way to work.',
  // `find just one law abiding citizen`,
  // 'sensationally',
  // 'catch',
  // 'teach',
  // 'buy',
  // 'break',
  // 'sink',
  // 'know',
  // 'run',
  // 'swim',
  // 'sea of japan',
  // 'adriadic sea',
  // 'more broken promises',
  // 'cheerful',
  // 'secure',
  // 'we will convert',
  // 'matchmaking',
  // "would be amusing",
  // "would be outstanding",

  // 'please do not speak',
  // 'is a tough read',
  // 'spot on',
  // 'up to date',
  // 'sleepier',
  // 'guiltier',
  // 'clean',

  // 'drunk',
  // 'hearty',
  // 'holy',
  // 'leery',

  // 'solitary',
  // 'cynically',
  // 'hairy',
  // 'richest',

  // 'jet',

  // "sittin",
  // "ridin",
  // "jus",
  // "allergic",
  // "listed",

  // "quo",
  // "triple",
  // "foremost",
  // "friends",
  // "guys",

  // "playin",
  // "waitin",
  // "gettin",
  // "comin",
  // "livin",
  // "sayin",
  // "doin",
  // "lovin",


  // "tone",
  // "shore",

  // "i drive to the cottage",
  // "He will study biology in college.",
  // "drive",
  // "vie",
  // "convoluted",
  // "rooted",
  // "trumpeted",

  // "wad",
  // "sub",



  // 'overtime',


  // "small fragment",

  // 'manufacturing',
  // 'stream',
  // 'cave',
  // 'what companies are doing is',


]
// let doc = nlp(arr[0]).debug()
// // doc.verbs().toPastParticiple()
// console.log(doc.verbs().conjugate())
// // doc.verbs().toGerund()
// doc.verbs().toPastParticiple()
// doc.debug()

// console.log(doc.text())
// console.log(doc.compute('root').text('root'))
// console.log(doc.json({ root: true })[0])

// let doc = nlp('sept 4 1998')
console.log(nlp.parseMatch('[<month>#Month] [<date>#Value] [<year>#Year]?'))
console.log(nlp.parseMatch('[<month>#Month] [<date>#Value] [<year>#Year?]'))
// let m = doc.match('[<month>#Month] [<date>#Value] [<year>#Year]?')
// console.log(m.groups())



