import User from '../models/user.model.js'

export const UserProfileService = (email) => {
    try {
        return User.findOne({ where: { email: email } })
    } catch (error) {
        throw new Error(error)
    }
}

export const getAllUserService = () => {
    try {
        return User.findAll()
    } catch (error) {
        throw new Error(error)
    }
}

export const getByIdUserService = (id) => {
    try {
        return User.findOne({ where: { id: id } })
    } catch (error) {
        throw new Error(error)
    }
}

export const getPageUserService = (page, limit) => {
    try {
        return User.findAll({ limit: limit, offset: page })
    } catch (error) {
        throw new Error(error)
    }
}

export const getFilterUserService = (name, value) => {
    try {
        return User.findAll({ where: { name: value } })
    } catch (error) {
        throw new Error(error)
    }
}

export const getSearchUserService = (search) => {
    try {
        return User.findAll({
            where: {
                firstname: {
                    [Op.iLike]: `%${search}%`,
                },
            },
        })
    } catch (error) {
        throw new Error(error)
    }
}

export const createUserService = (data) => {
    try {
        return User.create(data)
    } catch (error) {
        throw error
    }
}

export const updateUserService = (id, data) => {
    try {
        return User.update(data, {
            where: { id: id },
        })
    } catch (error) {
        throw new Error(error)
    }
}

export const deleteUserService = (id) => {
    try {
        return User.destroy({
            where: { id: id },
        })
    } catch (error) {
        throw new Error(error)
    }
}
