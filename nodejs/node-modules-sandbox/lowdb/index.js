const lowdb = require('lowdb')
const db = lowdb('db.json')

db
  .defaults({
    'news': [],
    'users': []
  })
  .write()

db
  .get('news')
  .push({
    id: 1,
    type: 'crime',
    content: 'someone killed someone'
  })
  .write()

db
  .set('settings.toogleOption', false)
  .write()

const value = db
  .get('news')
  .find({ id: 1 })
  .value()

console.log(value)

db
  .get('news')
  .remove({ id: 1 })
  .write()
