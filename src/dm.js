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
    let a = new Agent({
      tenant,
      name
    })
    await a.save()
  }

  async removeAgent (tenant, name) {
    let a = await Agent.findOne({tenant, name})
    a.remove()
  }

  async all () {
    return Agent.find()
  }

  async run () {
    await this.db.connect()
  }
}

module.exports = BambooDM
