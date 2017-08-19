/*
 * +===============================================
 * | Author:        Parham Alvani (parham.alvani@gmail.com)
 * |
 * | Creation Date: 20-07-2017
 * |
 * | File Name:     index.js
 * +===============================================
 */
/* Configuration */
const config = require('config')

/* Bamboo Device Manager */
const BambooDM = require('./src/dm')
const bambooDM = new BambooDM(config.mongo.url)

/* Command Line Interface */
const vorpal = require('vorpal')()
const chalk = require('chalk')

vorpal
  .command('agents', 'lists all connected agents')
  .action(async function () {
    let as = await bambooDM.all()
    for (let a of as) {
      this.log(`ID: ${chalk.rgb(255, 102, 204)(a._id)}`)
      this.log(`Tenant: ${chalk.rgb(204, 255, 102)(a.tenant)}`)
      this.log(`Name: ${chalk.rgb(102, 204, 255)(a.name)}`)
      this.log(`Time: ${chalk.rgb(255, 255, 255)(a.time)}`)
      this.log(`Things: ${chalk.rgb(255, 255, 255)(a.things)}`)
    }
  })

vorpal.log(' * 18.20 at Sep 07 2016 7:20 IR721')
vorpal.delimiter(`${chalk.green('Bamboo')} - ${chalk.rgb(255, 177, 79)('Bamboolia')} > `).show()

/* Bamboo component initiation */
const BambooComponent = require('@ibamboo/component')

new BambooComponent({
  mqttHost: config.connectivity.host,
  mqttPort: config.connectivity.port,
  name: 'bamboolia',
  subscribes: ['discovery']
}).on('ready', () => {
  vorpal.log(` * MQTT at ${config.connectivity.host}:${config.connectivity.port}`)
}).on('discovery', (message) => {
  vorpal.log(message)
  if (message.type === 'add') {
    bambooDM.addAgent(message.tenant, message.name)
  }
  if (message.type === 'remove') {
    bambooDM.removeAgent(message.tenant, message.name)
  }
  if (message.type === 'things') {
    bambooDM.addThings(message.tenant, message.name, message.things)
  }
})

/* HTTP server initiation */
const Hapi = require('hapi')

const server = new Hapi.Server()

server.connection({
  host: config.http.host,
  port: config.http.port
})

server.route({
  method: 'GET',
  path: '/agent',
  handler: async function (request, reply) {
    let as = await bambooDM.all()
    let res = {}

    for (let a of as) {
      res[`${a.tenant}/${a.name}`] = {
        time: new Date(a.time).toISOString(),
        things: a.things
      }
    }

    return reply(res)
  }
})

server.start((err) => {
  if (err) {
    throw err
  }
  vorpal.log(` * HTTP at ${server.info.uri}`)
})
