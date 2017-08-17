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
const mongorito = require('mongorito')

class BambooDM {
  constructor (url) {
    this.db = new mongorito.Database(url)
    this.db.register(Agent)
  }

  async addAgent (tenant, name) {
    await Agent.remove({tenant, name})

    await new Agent({
      tenant,
      name
    }).save()
  }

  async removeAgent (tenant, name) {
    await Agent.remove({tenant, name})
  }

  async all () {
    return Agent.find()
  }

  async run () {
    await this.db.connect()
  }
}

module.exports = BambooDM
