// find the main verb, from a verb phrase
const getMain = function (vb) {
  let root = vb
  if (vb.wordCount() > 1) {
    root = vb.not('(#Negative|#Auxiliary|#Modal|#Adverb)')
    // main = main.match('!#Particle')
  }
  // fallback to just the last word, sometimes
  if (root.length > 1 && !root.has('#Phrasal #Particle')) {
    root = root.last()
  }
  // fallback
  if (!root.found) {
    root = vb.not('#Negative')
    return root
  }
  return root
}
export default getMain
