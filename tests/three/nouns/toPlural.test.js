import test from 'tape'
import nlp from '../_lib.js'
const here = '[three/noun-toPlural] '

test('toPlural:', function (t) {
  let arr = [
    ['snake', 'snakes'],
    ['ski', 'skis'],
    // ["Barrymore", "Barrymores"],
    ['witch', 'witches'],
    ['box', 'boxes'],
    ['gas', 'gases'],
    ['kiss', 'kisses'],
    ['index', 'indices'],
    ['appendix', 'appendices'],
    ['criterion', 'criteria'],
    ['berry', 'berries'],
    ['activity', 'activities'],
    ['daisy', 'daisies'],
    ['church', 'churches'],
    ['fox', 'foxes'],
    ['stomach', 'stomachs'],
    ['epoch', 'epochs'],
    ['knife', 'knives'],
    ['half', 'halves'],
    ['scarf', 'scarves'],
    ['chief', 'chiefs'],
    ['spoof', 'spoofs'],
    ['cafe', 'cafes'],
    ['gulf', 'gulfs'],
    ['alternative', 'alternatives'],
    ['solo', 'solos'],
    // ['zero', 'zeros'],
    ['avocado', 'avocados'],
    ['studio', 'studios'],
    ['zoo', 'zoos'],
    ['embryo', 'embryos'],
    ['hero', 'heroes'],
    ['banjo', 'banjos'],
    ['cargo', 'cargos'],
    ['flamingo', 'flamingos'],
    ['fresco', 'frescos'],
    ['ghetto', 'ghettos'],
    ['halo', 'halos'],
    ['mango', 'mangos'],
    ['memento', 'mementos'],
    ['motto', 'mottos'],
    ['tornado', 'tornados'],
    ['tuxedo', 'tuxedos'],
    ['volcano', 'volcanos'],
    ['bus', 'buses'],
    ['crisis', 'crises'],
    ['analysis', 'analyses'],
    ['neurosis', 'neuroses'],
    ['aircraft', 'aircraft'],
    ['halibut', 'halibut'],
    ['moose', 'moose'],
    ['salmon', 'salmon'],
    ['sheep', 'sheep'],
    ['spacecraft', 'spacecraft'],
    ['tuna', 'tuna'],
    ['trout', 'trout'],
    ['armadillo', 'armadillos'],
    ['auto', 'autos'],
    ['bravo', 'bravos'],
    ['bronco', 'broncos'],
    ['casino', 'casinos'],
    ['combo', 'combos'],
    ['gazebo', 'gazebos'],
    //test that plural.pluralize()==plural..
    ['snakes', 'snakes'],
    ['skis', 'skis'],
    // ['mayor of chicago', 'mayors of chicago'],
    // ["Barrymores", "Barrymores"],
    ['witches', 'witches'],
    ['boxes', 'boxes'],
    ['gases', 'gases'],
    ['spoofs', 'spoofs'],
    ['solos', 'solos'],
    ['avocados', 'avocados'],
    ['studios', 'studios'],
    ['zoos', 'zoos'],
  ]
  arr.forEach(function (a) {
    const r = nlp(a[0]).tag('Noun').nouns()
    const str = r.toPlural().out('normal')
    t.equal(str, a[1], here + a[0])
  })
  t.end()
})
