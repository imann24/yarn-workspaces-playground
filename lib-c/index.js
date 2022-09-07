const cowsay = require('cowsay')
const globalVersion = require('global-package-version')
globalVersion(require('cowsay/package.json'))

const sayHello = (name) => {
  console.log(`Using package version(s): ${JSON.stringify(packageVersion)}`)
  console.log(cowsay.say({text: `Hello World, ${name}`}))
}

module.exports = {
  sayHello,
}
