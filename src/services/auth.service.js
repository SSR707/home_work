import User from '../models/user.model'
import Otp from '../models/otp.model'
export const createOtp = (data) => {
    try {
        return Otp.create(data)
    } catch (error) {
        throw error
    }
}
export const getOtpService = (email) => {
    try {
        return Otp.findOne({ where: { email: email } })
    } catch (error) {
        throw error
    }
}

export const deleteOtpService = async (id) => {
    try {
        return User.destroy({
            where: { id: id },
        })
    } catch (error) {
        throw error
    }
}

export const getUserByEmailService = (email) => {
    try {
        return User.findOne({ where: { email: email } })
    } catch (error) {
        throw error
    }
}
