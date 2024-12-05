import { Sequelize, DataTypes } from 'sequelize'
import db from '../db/index.js'
import Post from './post.model.js'
import User from './user.model.js'
const Comments = db.define('comments', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
})
Comments.belongsTo(User, { foreignKey: 'userId' })
Comments.belongsTo(Post, { foreignKey: 'postId' })
export default Comments
