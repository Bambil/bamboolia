/*
 * +===============================================
 * | Author:        Parham Alvani <parham.alvani@gmail.com>
 * |
 * | Creation Date: 17-08-2017
 * |
 * | File Name:     src/dm.js
 * +===============================================
 */
const Agent = require('./agent')
const mongoose = require('mongoose')

class BambooDM {
  constructor (url) {
    mongoose.connect(url, {useMongoClient: true})
  }

  async addAgent (tenant, name) {
    await Agent.update(
      {tenant, name},
      {
        tenant,
        name,
        time: Date.now(),
        things: []
      },
      {
        upsert: true,
        runValidators: true
      }
    )
  }

  async removeAgent (tenant, name) {
    await Agent.remove({tenant, name})
  }

  async addThings (tenant, name, things) {
    await Agent.update(
      {tenant, name},
      {
        tenant,
        name,
        time: Date.now(),
        things
      },
      {
        upsert: true,
        runValidators: true
      }
    )
  }

  async all () {
    return Agent.find()
  }
}

module.exports = BambooDM
