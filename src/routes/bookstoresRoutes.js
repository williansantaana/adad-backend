import express from 'express'
import { ObjectId } from 'mongodb'
import * as bookstoreModel from '../models/bookstoreModel.js'

const router = express.Router()

router.post('/:id/books', async (req, res) => {
    const id = ObjectId.isValid(req.params.id)
        ? ObjectId.createFromHexString(req.params.id)
        : parseInt(req.params.id)
    const books = req.body
    const { status, result } = await bookstoreModel.addBooksToAllBookstores(id, books)

    res.status(status).json(result)
})

router.get('/:id/books', async (req, res) => {
    const id = ObjectId.isValid(req.params.id)
        ? ObjectId.createFromHexString(req.params.id)
        : parseInt(req.params.id)
    const limit = Math.max(1, parseInt(req.query.limit) || 10)
    const page = Math.max(1, parseInt(req.query.page) || 1)
    const { status, result } = await bookstoreModel.getBooksByBookstoreId(id, limit, page)

    res.status(status).json(result)
})

router.get('/near', async (req, res) => {
    const { latitude, longitude, maxDistance } = req.query
    const limit = Math.max(1, parseInt(req.query.limit) || 10)
    const page = Math.max(1, parseInt(req.query.page) || 1)
    const { status, result } = await bookstoreModel.getNearbyBookstores(latitude, longitude, maxDistance, limit, page   )

    res.status(status).json(result)
})

router.post('/near-route', async (req, res) => {
    const { route, maxDistance } = req.body
    const limit = Math.max(1, parseInt(req.query.limit) || 10)
    const page = Math.max(1, parseInt(req.query.page) || 1)
    const { status, result } = await bookstoreModel.getBookstoresNearRoute(route, maxDistance, limit, page)

    res.status(status).json(result)
})

router.get('/near-count', async (req, res) => {
    const { latitude, longitude, maxDistance } = req.query
    const { status, result } = await bookstoreModel.countBookstoresNearLocation(latitude, longitude, maxDistance)

    res.status(status).json(result)
})

router.get('/fair/inside', async (req, res) => {
    const { latitude, longitude } = req.query
    const { status, result } = await bookstoreModel.isUserInsideFair(latitude, longitude)

    res.status(status).json(result)
  })

export default router