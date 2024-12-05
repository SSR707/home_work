import { Router } from 'express'
import { PostController } from '../controllers/index.js'
import { roleGuard } from '../middleware/index.js'

export const postRouter = Router()

postRouter.get('/', PostController.getAll)
postRouter.get('/:id', PostController.getOne)
postRouter.post('/', PostController.create)
postRouter.put('/:id', roleGuard('admin'), PostController.update)
postRouter.delete('/:id', roleGuard('admin'), PostController.delete)
