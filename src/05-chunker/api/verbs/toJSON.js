import parseVerb from './parse/index.js'
import { toInfinitive } from './conjugate/toInfinitive/index.js'
import getGrammar from './grammar/index.js'

const toArray = function (m) {
  if (!m || !m.isView) {
    return []
  }
  const opts = { normal: true, terms: false, text: false }
  return m.json(opts).map(s => s.normal)
}

const toText = function (m) {
  if (!m || !m.isView) {
    return ''
  }
  return m.text('normal')
}

const toJSON = function (vb) {
  let parsed = parseVerb(vb)
  const infinitive = toInfinitive(parsed, vb.methods, vb.model)
  return {
    root: parsed.root.text(),
    preAdverbs: toArray(parsed.adverbs.pre),
    postAdverbs: toArray(parsed.adverbs.post),
    auxiliary: toText(parsed.auxiliary),
    infinitive: infinitive,
    grammar: getGrammar(vb, parsed),
  }
}
export default toJSON
