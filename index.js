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

/* Bamboo Device Manager */
const BambooTM = require('./src/tm')
const bambooTM = new BambooTM(config.mongo.url)

const recursive = require('recursive-readdir')
const YAML = require('yamljs')
recursive('packages/standard', function (err, files) {
  if (err) {
    return
  }
  files.forEach((file) => {
    let m = YAML.load(file)
    bambooTM.createModel(`${m.package}.${m.name}`, m.settings, m.states, m.statistics, m.attributes)
  })
})

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

vorpal
  .command('model [name]', 'thing model')
  .action(async function (args) {
    let m = await bambooTM.getModel(args.name)
    if (m) {
      this.log(`Name: ${m.name}`)
      this.log(`Statistics: ${m.statistics}`)
      this.log(`States: ${m.states}`)
      this.log(`Settings: ${m.settings}`)
      this.log(`Attributes: ${m.attributes}`)
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

server.route([
  {
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
  }, {
    method: 'GET',
    path: '/model/{name}',
    handler: async function (request, reply) {
      let m = await bambooTM.getModel(request.params.name)

      return reply(m)
    }

  }
])

server.start((err) => {
  if (err) {
    throw err
  }
  vorpal.log(` * HTTP at ${server.info.uri}`)
})
