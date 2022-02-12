'use strict';

/*
    Daca adaugam o entitate care trebuie sa aiba relatii cu alte entitati
    Atunci se recomanda sa definim relatiile respective in fisierul "index.js" 
*/

const JobPosting = require('./jobposting');
const Candidate = require('./candidate');
const sequelizeHandle = require('./sequelize').sequelize

JobPosting.hasMany(Candidate, {
    onDelete: "cascade"
})

Candidate.belongsTo(JobPosting, {
    as: 'jobposting',
    foreignKey: "jobId"
});

const fmtValidationError = (head, err) => {
    let errMsg = head 
    errMsg += "\n"
    errMsg += err.errors.map((e,i) => `${i+1}. ` + e.message).join("\n")
    return errMsg
}

module.exports = {
    JobPosting,
    Candidate,
    sequelizeHandle,
    fmtValidationError
}