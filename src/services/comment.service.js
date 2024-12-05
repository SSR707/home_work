import Comments from '../models/commet.model'

export const CommentService = {
    create: async (data) => {
        try {
            const res = await Comments.create(data)
            if (!res || res.length == 0) {
                return {
                    success: false,
                    status: 500,
                    message: "Comment databasega qo'shib bo'lmadi",
                }
            }
            return {
                success: true,
                status: 200,
                message: res,
            }
        } catch (error) {
            throw new Error(error)
        }
    },
    getAll: async (page = 1, limit = 10, name, value) => {
        try {
            const offset = (page - 1) * limit
            let res
            if (name && value) {
                res = await Comments.findAll({
                    where: {
                        [name]: {
                            [Op.iLike]: `%${value}%`,
                        },
                    },
                    limit: limit,
                    offset: page,
                })
            } else {
                res = await Comments.findAll({ limit: limit, offset: page })
            }
            if (!res || res.length == 0) {
                return {
                    success: false,
                    status: 404,
                    message: 'Comment lar topilmadi',
                }
            }
            return {
                success: true,
                status: 200,
                message: res,
            }
        } catch (error) {
            throw new Error(error)
        }
    },
    getOne: async (id) => {
        try {
            const res = await Comments.findOne({ where: { id: id } })
            if (!res || res.length == 0) {
                return {
                    success: false,
                    status: 404,
                    message: 'Comment topilmadi',
                }
            }
            return {
                success: true,
                status: 200,
                message: res,
            }
        } catch (error) {
            throw new Error(error)
        }
    },
    update: async (id, data) => {
        try {
            const res = await Comment.update(data, {
                where: { id: id },
            })
            if (!res || res.length == 0) {
                return {
                    success: false,
                    status: 404,
                    message: 'Comment topilmadi',
                }
            }
            return {
                success: true,
                status: 200,
                message: res,
            }
        } catch (error) {
            throw new Error(error)
        }
    },
    delete: async (id) => {
        try {
            const res = await Comments.destroy({
                where: { id: id },
            })
            if (!res || res.length == 0) {
                return {
                    success: false,
                    status: 404,
                    message: 'Comment topilmadi',
                }
            }
            return {
                success: true,
                status: 200,
                message: res,
            }
        } catch (error) {
            throw new Error(error)
        }
    },
}
