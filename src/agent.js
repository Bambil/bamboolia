/*
 * +===============================================
 * | Author:        Parham Alvani <parham.alvani@gmail.com>
 * |
 * | Creation Date: 17-08-2017
 * |
 * | File Name:     src/agent.js
 * +===============================================
 */
const mongoose = require('mongoose')

const AgentSchema = new mongoose.Schema({
  name: String,
  tenant: String,
  time: {type: Date, default: Date.now},
  things: [{
    type: {type: String},
    id: String
  }]
})

const Agent = mongoose.model('Agent', AgentSchema)

module.exports = Agent
