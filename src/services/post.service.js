import Post from '../models/post.model'
export const PostService = {
    create: async (data) => {
        try {
            const res = await Post.create(data)
            if (!res || res.length == 0) {
                return {
                    success: false,
                    status: 500,
                    message: "Post databasega qo'shib bo'lmadi",
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
                res = await Post.findAll({
                    where: {
                        [name]: {
                            [Op.iLike]: `%${value}%`,
                        },
                    },
                    limit: limit,
                    offset: page,
                })
            } else {
                res = await Post.findAll({ limit: limit, offset: page })
            }
            if (!res || res.length == 0) {
                return {
                    success: false,
                    status: 404,
                    message: 'Post lar topilmadi',
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
            const res = await Post.findOne({ where: { id: id } })
            if (!res || res.length == 0) {
                return {
                    success: false,
                    status: 404,
                    message: 'Post topilmadi',
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
            const res = await Post.update(data, {
                where: { id: id },
            })
            if (!res || res.length == 0) {
                return {
                    success: false,
                    status: 404,
                    message: 'Post topilmadi',
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
            const res = await Post.destroy({
                where: { id: id },
            })
            if (!res || res.length == 0) {
                return {
                    success: false,
                    status: 404,
                    message: 'Post topilmadi',
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
