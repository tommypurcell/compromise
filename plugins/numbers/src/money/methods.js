const makeNumber = require('../numbers/convert/makeNumber')
const parseMoney = require('./parse')

const titleCase = function (str = '') {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  })
}

const moneyMethods = {
  /** which currency is this money in? */
  currency: function (n) {
    let arr = []
    this.forEach((doc) => {
      let found = parseMoney(doc)
      if (found) {
        arr.push(found)
      }
    })
    if (typeof n === 'number') {
      return arr[n]
    }
    return arr
  },

  /** overloaded json method with additional number information */
  json: function (options) {
    let n = null
    if (typeof options === 'number') {
      n = options
      options = null
    }
    options = options || { text: true, normal: true, trim: true, terms: true }
    let res = []
    this.forEach((doc) => {
      let json = doc.json(options)[0]
      let obj = parseMoney(doc)
      json.number = obj.num
      if (obj.iso) {
        json.iso = obj.iso.toUpperCase()
        json.symbol = obj.symbol
        json.currency = titleCase(obj.currency)
        json.demonym = titleCase(obj.demonym)
      }
      json.textFormat = makeNumber(obj, true, false)
      if (obj.dem && obj.name) {
        let str = ' ' + obj.name
        if (obj.name !== 1) {
          str += 's'
        }
        json.textFormat += str
      }
      res.push(json)
    })
    if (n !== null) {
      return res[n] || {}
    }
    return res
  },
}

module.exports = moneyMethods
