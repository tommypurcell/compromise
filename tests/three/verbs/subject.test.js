import test from 'tape'
import nlp from '../_lib.js'
const here = '[three/verb-subjects]'

test('get fluent-verb subject', function (t) {
  let arr = [
    ['i am walking', 'i', 'am walking'],
    ['we are walking', 'we', 'are walking'],
    ['he let his dog walk', 'he', 'let'],
    ['the milkshakes tasted great', 'the milkshakes', 'tasted'],
    [`the ball game started`, 'the ball game', 'started'],
    ['Mr. Gretzky walks to the park', 'Mr. Gretzky', 'walks'],
    [`the ball games started`, 'the ball games', 'started'],
    ['A friend, answered the other.', 'a friend', 'answered'],
    [`At Corky's carnival, this attraction uses the "human"`, 'attraction', 'uses'],
    ['Former Congressman Tim Penny has raised the possibility', 'Congressman Tim Penny', 'has raised'],
    ["The TTC's Bloor-Danforth Line will turn 50 years old", 'Bloor-Danforth Line', 'will turn'],
    ["so we vigorously searched through my friend's selection and found Good Charlotte.", 'selection', 'found'],
    ['Drizzy professes love for ESPN reporter at Raptors Drake Night', 'professes', 'love'],
    ['The Dirty Bird is opening a second location', 'The Dirty Bird', 'is opening'],
    ['With the endorphins released and the decreased inflammation I felt great.', 'endorphins', 'released'],
    ["At last the wind wizard's son said to the King.", 'son', 'said'],
    ['We are increasing border controls by 50 percent.', 'We', 'are increasing'],
    ["She says, 'Hey baby I just might take the chance'.", 'She', 'says'],
    ['We danced every slow one the band could play', 'We', 'danced'],
    ['You can stick your golden handshake', 'You', 'can stick'],
    ["Governor of New Jersey, she appointed the state's first female Attorney General", 'she', 'appointed'],
    ['Cogia Hassan was the robber Captain, and carried a dagger under his garment.', 'robber Captain', 'carried'],
    ['The newspaper supported the Whigs, (later Liberals).', 'newspaper', 'supported'],
    ['Baby you can drive my car', 'you', 'can drive'],
    ['Aiyah, we go out eat first den decide later lah.', 'we', 'eat'],
    ['Experts warn against consuming adulterated oil', 'Experts', 'warn'],
    ['He slapped my face and he shook me like a rag doll', 'He', 'slapped'],
    ["she mistook the old woman's caution, and lingered for hours.", 'caution', 'lingered'],
    ['As I was standing there, I remember this semi-truck coming towards me.', 'semi-truck', 'coming'],
  ]
  arr.forEach(a => {
    let [str, subject, verb] = a
    let vb = nlp(str).verbs(0)
    let res = vb.subjects()
    t.equal(vb.text(), verb, here + `[vb] '${a[0]}'`)
    t.equal(res.text(), subject, here + `[subj] '${a[0]}'`)
  })
  t.end()
})
