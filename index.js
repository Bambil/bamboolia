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

/* Command Line Interface */
const vorpal = require('vorpal')()
const chalk = require('chalk')

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
  handler: function (request, reply) {
    return reply('Hello')
  }
})

server.start((err) => {
  if (err) {
    throw err
  }
  vorpal.log(` * HTTP at ${server.info.uri}`)
})
