/*
 * +===============================================
 * | Author:        Parham Alvani <parham.alvani@gmail.com>
 * |
 * | Creation Date: 22-08-2017
 * |
 * | File Name:     src/tm.js
 * +===============================================
 */
const mongoose = require('mongoose')
const Type = require('./type')

class BambooTM {
  constructor (url) {
    mongoose.connect(url, {useMongoClient: true})
    mongoose.Promise = global.Promise
  }

  async createModel (name, settings, states, statistics, attributes) {
    await Type.update({ name }, {
      name,
      settings,
      states,
      statistics,
      attributes
    }, {
      upsert: true,
      runValidators: true
    })
  }

  async getModel (name) {
    return Type.findOne({ name })
  }
}

module.exports = BambooTM
