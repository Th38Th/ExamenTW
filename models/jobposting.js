const { sequelize, DataTypes } = require('./sequelize')

const JobPosting = sequelize.define('JobPosting', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    descriere: {
        type: DataTypes.STRING,
        validate: {
            len: {
                msg: "Description must have at least 3 characters.",
                args: [3, 30]
            }
        }
    },
    deadline: DataTypes.DATE
});

module.exports = JobPosting;