import express from 'express'
import {ObjectId} from 'mongodb'
import * as bookstoreModel from '../models/bookstoreModel.js'
import {parseDocumentId} from "../utils/functions.js";

const router = express.Router()

router.get('/', async (req, res) => {
    const limit = Math.max(1, parseInt(req.query.limit) || 20)
    const page = Math.max(1, parseInt(req.query.page) || 1)
    const {status, result} = await bookstoreModel.getBookstores(limit, page)

    res.status(status).json(result)
})

router.post('/stock', async (req, res) => {
    const stock = req.body
    const { status, result } = await bookstoreModel.createBookstoreStock(stock)

    res.status(status).json(result)
})

router.get('/near', async (req, res) => {
    const {latitude, longitude, maxDistance} = req.query
    const limit = Math.max(1, parseInt(req.query.limit) || 20)
    const page = Math.max(1, parseInt(req.query.page) || 1)
    const {status, result} = await bookstoreModel.getNearbyBookstores(latitude, longitude, maxDistance, limit, page)

    res.status(status).json(result)
})

router.post('/near-route', async (req, res) => {
    const {route, maxDistance} = req.body
    const limit = Math.max(1, parseInt(req.query.limit) || 20)
    const page = Math.max(1, parseInt(req.query.page) || 1)
    const {status, result} = await bookstoreModel.getBookstoresNearRoute(route, maxDistance, limit, page)

    res.status(status).json(result)
})

router.get('/near-count', async (req, res) => {
    const {latitude, longitude, maxDistance} = req.query
    const {status, result} = await bookstoreModel.countBookstoresNearLocation(latitude, longitude, maxDistance)

    res.status(status).json(result)
})

router.get('/:id', async (req, res) => {
    const id = parseDocumentId(req.params.id)
    const {status, result} = await bookstoreModel.getBookstore(id)

    res.status(status).json(result)
})

router.get('/fair/inside', async (req, res) => {
    const {latitude, longitude} = req.query
    const {status, result} = await bookstoreModel.isUserInsideFair(latitude, longitude)

    res.status(status).json(result)
})

router.post('/:id/books', async (req, res) => {
    const id = parseDocumentId(req.params.id)
    const books = req.body
    const {status, result} = await bookstoreModel.addBooksToAllBookstores(id, books)

    res.status(status).json(result)
})

router.get('/:id/books', async (req, res) => {
    const id = parseDocumentId(req.params.id)
    const limit = Math.max(1, parseInt(req.query.limit) || 20)
    const page = Math.max(1, parseInt(req.query.page) || 1)
    const {status, result} = await bookstoreModel.getBooksByBookstoreId(id, limit, page)

    res.status(status).json(result)
})

export default router