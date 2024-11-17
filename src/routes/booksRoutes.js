import express from 'express'
import { ObjectId } from 'mongodb'
import * as bookModel from '../models/bookModel.js'

const router = express.Router()

router.get('/', async (req, res) => {
    const limit = Math.max(1, parseInt(req.query.limit) || 10)
    const page = Math.max(1, parseInt(req.query.page) || 1)
    const { status, result } = await bookModel.getBooks(limit, page)

    res.status(status).json(result)
})

router.post('/', async (req, res) => {
    const books = req.body
    const { status, result } = await bookModel.createBooks(books)

    res.status(status).json(result)
})

router.get('/five-star', async (req, res) => {
    const limit = Math.max(1, parseInt(req.query.limit) || 10)
    const page = Math.max(1, parseInt(req.query.page) || 1)
    const { status, result } = await bookModel.getFiveStarBooks(limit, page)

    res.status(status).json(result)
})

router.get('/comments', async (req, res) => {
    const limit = Math.max(1, parseInt(req.query.limit) || 10)
    const page = Math.max(1, parseInt(req.query.page) || 1)
    const { status, result } = await bookModel.getBooksByComments(limit, page)

    res.status(status).json(result)
})

router.get('/job', async (req, res) => {
    const limit = Math.max(1, parseInt(req.query.limit) || 10)
    const page = Math.max(1, parseInt(req.query.page) || 1)
    const { status, result } = await bookModel.getReviewsByJob(limit, page)

    res.status(status).json(result)
})

router.get('/filter', async (req, res) => {
    const { price, category, author } = req.query
    const limit = Math.max(1, parseInt(req.query.limit) || 10)
    const page = Math.max(1, parseInt(req.query.page) || 1)
    const { status, result } = await bookModel.getFilteredBooks(price, category, author, limit, page)

    res.status(status).json(result)
})

router.get('/:id', async (req, res) => {
    const id = ObjectId.isValid(req.params.id)
        ? ObjectId.createFromHexString(req.params.id)
        : parseInt(req.params.id)
    const { status, result } = await bookModel.getBook(id)

    res.status(status).json(result)
})

router.delete('/:id', async (req, res) => {
    const id = ObjectId.isValid(req.params.id)
        ? ObjectId.createFromHexString(req.params.id)
        : parseInt(req.params.id)
    const { status, result } = await bookModel.deleteBook(id)

    res.status(status).json(result)
})

router.put('/:id', async (req, res) => {
    const id = ObjectId.isValid(req.params.id)
        ? ObjectId.createFromHexString(req.params.id)
        : parseInt(req.params.id)
    const book = req.body
    const { status, result } = await bookModel.updateBook(id, book)

    res.status(status).json(result)
})

router.get('/top/:limit', async (req, res) => {
    const limit = Math.max(1, parseInt(req.params.limit))
    const page = Math.max(1, parseInt(req.query.page) || 1)
    const { status, result } = await bookModel.getTopBooks(limit, page)
    
    res.status(status).json(result)
})

router.get('/ratings/:order', async (req, res) => {
    const order = req.params.order
    const limit = Math.max(1, parseInt(req.query.limit) || 10)
    const page = Math.max(1, parseInt(req.query.page) || 1)
    const { status, result } = await bookModel.getBooksByRatings(order, limit, page)

    res.status(status).json(result)
})

router.get('/year/:year', async (req, res) => {
    const year = parseInt(req.params.year)
    const limit = Math.max(1, parseInt(req.query.limit) || 10)
    const page = Math.max(1, parseInt(req.query.page) || 1)
    const { status, result } = await bookModel.getBooksByYear(year, limit, page)

    res.status(status).json(result)
})

export default router