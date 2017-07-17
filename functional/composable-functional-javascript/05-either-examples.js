const { Left, Right, fromNullable } = require('./functional')
const { logx } = require('./utils')

//----------------------------------------------

const user1 = {
  name: 'Helton',
  address: {
    street: {
      name: 'Boulevard Street'
    }
  },
  premium: true,
  preferences: {
    showOffersOnStartup: false
  }
}

const user2 = { }

const user3 = { }

const defaultPrefs = {
  showOffersOnStartup: true
}

//----------------------------------------------

let currentUser = undefined

const showLogin = () => 'Please, sign in'
const renderPage = () => `Welcome, ${currentUser.name}`

const openSite = () =>
  fromNullable(currentUser)
  .fold(showLogin, renderPage)

logx('Without currentUser',
  openSite()
)

currentUser = user1

logx('With currentUser',
  openSite()
)

//----------------------------------------------

const loadPrefs = prefs => prefs

const getPrefs = user =>
  (user.premium ? Right(user) : Left('<not premium>'))
  .map(u => u.preferences)
  .fold(() => defaultPrefs, prefs => loadPrefs(prefs))

logx('getPrefs(user1) - User has preferences',
  JSON.stringify(getPrefs(user1))
)

logx('getPrefs(user3) - User has no preferences',
  JSON.stringify(getPrefs(user3))
)

//----------------------------------------------

const streetName = user =>
  fromNullable(user.address)
  .chain(address => fromNullable(address.street))
  .fold(() => '<no street provided>',
        street => street.name)

logx('streetName(user1) with street',
  streetName(user1)
)

logx('streetName(user2) without street',
  streetName(user2)
)

//----------------------------------------------

const concatUniq = (x, ys) =>
  fromNullable(ys.filter(y => y === x)[0])
  .fold(() => ys.concat(x), y => ys)

logx('concatUniq without repetition',
  concatUniq(3, [1, 2, 4, 5, 6])
)

logx('concatUniq with repetition',
  concatUniq(3, [1, 2, 3, 4, 5, 6])
)
