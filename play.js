const { connect } = require('./client');
const input = require('./input');
const { setupInput } = require('./input')

console.log('Connecting ...');

setupInput(connect());
