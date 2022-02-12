const other = require('./other')
const jobposting = require('./ship');
const candidate = require('./candidate');

const controllers = {
    jobposting,
    candidate,
    other
}

module.exports = controllers;