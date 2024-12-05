import { Sequelize, DataTypes } from 'sequelize'
import db from '../db/index.js'
import User from './user.model.js'
import Comments from './commet.model.js'
const Post = db.define('posts', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    slug: {
        type: DataTypes.STRING,
    },
})

Post.belongsTo(User, { foreignKey: 'userId' })
Post.hasMany(Comments, { foreignKey: 'postId' })

export default Post
