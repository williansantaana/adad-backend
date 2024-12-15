import express from 'express'
import {ObjectId} from 'mongodb'
import * as commentModel from '../models/commentModel.js'
import {parseDocumentId} from "../utils/functions.js";

const router = express.Router()

router.post('/', async (req, res) => {
    const {book_id, user_id, comment} = req.body
    const {status, result} = await commentModel.addComment({book_id, user_id, comment})

    res.status(status).json(result)
})

router.delete('/:id', async (req, res) => {
    const id = parseDocumentId(req.params.id)
    const {status, result} = await commentModel.deleteCommentById(id)

    res.status(status).json(result)
})

export default router