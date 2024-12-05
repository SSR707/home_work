import { Sequelize, DataTypes } from 'sequelize'
import db from '../db/index.js'
import User from './user.model.js'

const Otp = db.define('comments', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    otp_code: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    expired_at: {
        type: DataTypes.DATE,
        allowNull: false,
    },
})
Otp.beforeCreate((otp, options) => {
    const expirationTime = new Date()
    expirationTime.setMinutes(expirationTime.getMinutes() + 10)
    otp.expired_at = expirationTime
})
Otp.belongsTo(User, { foreignKey: 'userId' })
export default Otp
