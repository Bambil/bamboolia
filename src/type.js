/*
 * +===============================================
 * | Author:        Parham Alvani <parham.alvani@gmail.com>
 * |
 * | Creation Date: 21-08-2017
 * |
 * | File Name:     src/type.js
 * +===============================================
 */
const mongoose = require('mongoose')

const TypeSchema = new mongoose.Schema({
  name: String,
  attributes: [{
    type: {type: String},
    name: String
  }],
  settings: [{
    type: {type: String},
    name: String
  }],
  states: [{
    type: {type: String},
    name: String,
    event: Boolean
  }],
  statistics: [{
    type: {type: String},
    name: String
  }]
})

const Type = mongoose.model('Type', TypeSchema)

module.exports = Type
