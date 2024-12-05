import { Router } from 'express'
import { CommentController } from '../controllers/index.js'
import { roleGuard } from '../middleware/index.js'

export const commentRouter = Router()

commentRouter.get('/', CommentController.getAll)
commentRouter.get('/:id', CommentController.getOne)
commentRouter.post('/', CommentController.create)
commentRouter.put('/:id', roleGuard('admin'), CommentController.update)
commentRouter.delete('/:id', roleGuard('admin'), CommentController.delete)
