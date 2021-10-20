import fastTag from '../_fastTag.js'
import looksPlural from './looksPlural.js'
// tags that are neither plural or singular
const uncountable = [
  'Acronym',
  'Abbreviation',
  'ProperNoun',
  'Uncountable',
  'Possessive',
  'Pronoun',
  'Activity',
  'Honorific',
]
// try to guess if each noun is a plural/singular
const setPluralSingular = function (term) {
  if (!term.tags.has('Noun') || term.tags.has('Plural') || term.tags.has('Singular')) {
    return
  }
  if (uncountable.find(tag => term.tags.has(tag))) {
    return
  }
  if (looksPlural(term.normal)) {
    fastTag(term, 'Plural', '3-plural-guess')
  } else {
    fastTag(term, 'Singular', '3-singular-guess')
  }
}

//add deduced parent tags to our terms
const fillTags = function (terms, i, model) {
  let term = terms[i]
  //there is probably just one tag, but we'll allow more
  let tags = Array.from(term.tags)
  for (let k = 0; k < tags.length; k += 1) {
    if (model.two.tagSet[tags[k]]) {
      let toAdd = model.two.tagSet[tags[k]].parents
      fastTag(term, toAdd, `3 [infer] ${tags[k]}`)
    }
  }
  // turn 'Noun' into Plural/Singular
  setPluralSingular(term)
}
export default fillTags
