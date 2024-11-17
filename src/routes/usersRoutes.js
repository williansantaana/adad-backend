import express from 'express'
import { ObjectId } from 'mongodb'
import * as userModel from '../models/userModel.js'

const router = express.Router()

router.get("/", async (req, res) => {
    const limit = Math.max(1, parseInt(req.query.limit) || 10)
    const page = Math.max(1, parseInt(req.query.page) || 1)
    const { status, result } = await userModel.getUsers(limit, page)

    res.status(status).json(result)
})

router.post('/', async (req, res) => {
    const users = req.body
    const { status, result } = await userModel.createUsers(users)

    res.status(status).json(result)
})

router.get('/:id', async (req, res) => {
    const id = ObjectId.isValid(req.params.id)
        ? ObjectId.createFromHexString(req.params.id)
        : parseInt(req.params.id)
    const { status, result } = await userModel.getUser(id)

    res.status(status).json(result)
})

router.delete('/:id', async (req, res) => {
    const id = ObjectId.isValid(req.params.id)
        ? ObjectId.createFromHexString(req.params.id)
        : parseInt(req.params.id)
    const { status, result } = await userModel.deleteUser(id)

    res.status(status).json(result)
})

router.put('/:id', async (req, res) => {
    const id = ObjectId.isValid(req.params.id)
        ? ObjectId.createFromHexString(req.params.id)
        : parseInt(req.params.id)
    const user = req.body
    const { status, result } = await userModel.updateUser(id, user)

    res.status(status).json(result)
})

export default router