import { PostService } from '../services/index.js'
import { postValidation } from '../validation/index.js'

const responseHandler = (result, res) => {
    if (!result.success) {
        return res.status(result.status).send(result.message)
    }
    return res.status(result.status).send(result.message)
}

export const PostController = {
    create: async (req, res, next) => {
        try {
            const { error } = postValidation(req.body)
            if (error) {
                return res.status(400).send('Malumot Xato')
            }
            const data = req.body
            const result = await PostService.create({
                user_id: req.user.id,
                ...data,
            })
            responseHandler(result, res)
        } catch (error) {
            logger.error(error)
            next(error)
        }
    },
    getAll: async (req, res, next) => {
        try {
            const page = req.query.page
            const limit = req.query.limit
            let key
            if (!page && !limit) {
                key = String(Object.keys(req.query)[0])
            } else if (!page || !limit) {
                key = String(Object.keys(req.query)[1])
            } else {
                key = String(Object.keys(req.query)[2])
            }
            const result = await PostService.getAll(
                page,
                limit,
                key,
                req.query[key],
            )
            responseHandler(result, res)
        } catch (error) {
            logger.error(error)
            next(error)
        }
    },
    getOne: async (req, res, next) => {
        try {
            const id = req.params.id
            const result = await PostService.getOne(id)
            responseHandler(result, res)
        } catch (error) {
            logger.error(error)
            next(error)
        }
    },
    update: async (req, res, next) => {
        try {
            const { error } = postValidation(req.body)
            if (error) {
                return res.status(400).send('Malumot Xato')
            }
            const id = req.params.id
            const data = req.body
            const result = await PostService.update(id, data)
            responseHandler(result, res)
        } catch (error) {
            logger.error(error)
            next(error)
        }
    },
    delete: async (req, res, next) => {
        try {
            const id = req.params.id
            const result = await PostService.delete(id)
            responseHandler(result, res)
        } catch (error) {
            logger.error(error)
            next(error)
        }
    },
}
