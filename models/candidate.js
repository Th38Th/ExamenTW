const { sequelize, DataTypes } = require('./sequelize')

const Candidate = sequelize.define('candidate', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {  
        type: DataTypes.STRING,
        validate: {
            len: {
                msg: "Name must have at least 5 characters.",
                args: [5,30]
            }
        }
    },
    cv: {
        type: DataTypes.TEXT,
        validate: {
            len: {
                msg: "Cv-ul must have at least 100 characters."
            }
        }
    },
    email: {
        type: DataTypes.STRING,
        validate: {
            isEmail : {
                msg: "Invalid e-mail address."
            }
        }
    },
    jobId: DataTypes.INTEGER
});

module.exports = Candidate