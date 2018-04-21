'use strict'

const Client = require('./lib/client')
const Server = require('./lib/server')

module.exports = (...argvs) => {
  if (argvs.length === 0) {
    throw new Error('Need arguments')
  }

  let result
  const type = argvs.shift()
  switch (type) {
    case 'client':
      result = new Client(argvs)
      break
    case 'server':
      result = new Server(argvs)
      break
    default:
      throw new Error('Unexpect type')
  }

  return result
}
