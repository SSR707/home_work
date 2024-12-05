import { Sequelize, DataTypes } from 'sequelize'
import db from '../db/index.js'
import Post from './post.model.js'
import Comments from './commet.model.js'
const User = db.define('users', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING,
    },
})

User.hasMany(Post, { foreignKey: 'userId' })
User.hasMany(Comments, { foreignKey: 'userId' })

export default User
