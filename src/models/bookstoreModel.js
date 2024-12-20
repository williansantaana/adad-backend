import db from '../database/config.js'
import { lineString, buffer } from '@turf/turf'
import {parseDocumentId} from "../utils/functions.js";

export const getBookstores = async (limit, page) => {
    try {
        if (limit > 20) {
            return { status: 400, result: { message: 'The \'limit\' must not be greater than 20' } }
        }

        const skip = (page - 1) * limit
        const bookstores = await db.collection('bookstores')
            .find({})
            .skip(skip)
            .limit(limit)
            .toArray()

        const totalRecords = await db.collection('bookstores').countDocuments()

        const result = {
            bookstores,
            pagination: {
                totalRecords,
                totalPages: Math.ceil(totalRecords / limit),
                currentPage: page
            }
        }

        return { status: 200, result }
    } catch (error) {
        console.error(error)
        return { status: 500, result: { message: 'Error fetching bookstores' } }
    }
}

export const getBookstore = async (id) => {
    try {
        const bookstore = await db.collection('bookstores').findOne({ _id: id })

        if (!bookstore) {
            return { status: 404, result: { message: `Bookstore with id: ${id} not found` } }
        }

        return { status: 200, result: bookstore }
    } catch (error) {
        console.error(error)
        return { status: 500, result: { message: 'Error fetching bookstore' } }
    }
}

export const addBooksToAllBookstores = async (id, books) => {
    try {
        if (!Array.isArray(books) || books.length === 0) {
            return { status: 400, result: { message: 'The list of books is required and must be a non-empty array' } }
        }

        const stockEntries = books.map((book) => ({
            bookstore_id: id,
            book_id: book._id,
            quantity: book.quantity ?? 1
        }))

        const bulkOperations = stockEntries.map((entry) => ({
            updateOne: {
                filter: { bookstore_id: entry.bookstore_id, book_id: entry.book_id },
                update: { $setOnInsert: entry },
                upsert: true
            }
        }))

        const result = await db.collection('stock').bulkWrite(bulkOperations)

        return {
            status: 200,
            result: {
                message: 'Books added to stock successfully',
                insertedCount: result.upsertedCount
            }
        }
    } catch (error) {
        console.error(error)
        return { status: 500, result: { message: 'Error adding books to bookstores' } }
    }
}

export const getBooksByBookstoreId = async (id, limit, page) => {
    try {
        if (limit > 20) {
            return { status: 400, result: { message: 'The \'limit\' must not be greater than 20' } }
        }
        const skip = (page - 1) * limit
        const books = await db.collection('stock').aggregate([
            { $match: { bookstore_id: id } },
            {
                $lookup: {
                    from: "books",
                    localField: "book_id",
                    foreignField: "_id",
                    as: "bookDetails"
                }
            },
            { $unwind: "$bookDetails" },
            {
                $project: {
                    _id: 0,
                    book_id: "$bookDetails._id",
                    title: "$bookDetails.title",
                    isbn: "$bookDetails.isbn",
                    authors: "$bookDetails.authors",
                    categories: "$bookDetails.categories",
                    pageCount: "$bookDetails.pageCount",
                    publishedDate: "$bookDetails.publishedDate",
                    thumbnailUrl: "$bookDetails.thumbnailUrl",
                    shortDescription: "$bookDetails.shortDescription",
                    longDescription: "$bookDetails.longDescription",
                    quantity: 1
                }
            },
            { $skip: skip },
            { $limit: limit }
        ]).toArray()

        if (!books || books.length === 0) {
            return { status: 404, result: { message: 'No books found for this bookstore' } };
        }

        const totalRecords = await db.collection('stock').countDocuments({ bookstore_id: id })

        const result = {
            books,
            pagination: {
                totalRecords,
                totalPages: Math.ceil(totalRecords / limit),
                currentPage: page
            }
        }

        return { status: 200, result }
    } catch (error) {
        console.error(error)
        return { status: 500, result: { message: 'Error fetching books from the bookstore' } }
    }
}

export const getNearbyBookstores = async (lat, lon, maxDist, limit, page) => {
    try {
        if (!lat || !lon) {
            return { status: 400, result: { message: 'The latitude is required' } }
        }

        if (limit > 20) {
            return { status: 400, result: { message: 'The \'limit\' must not be greater than 20' } }
        }

        const latitude = parseFloat(lat)
        const longitude = parseFloat(lon)
        const maxDistance = maxDist ? parseInt(maxDist) : 5000
        const skip = (page - 1) * limit
        const earthRadiusInMeters = 6378100

        const bookstores = await db.collection('bookstores').find({
            geometry: {
                $near: {
                    $geometry: {
                        type: "Point",
                        coordinates: [longitude, latitude]
                    },
                    $maxDistance: maxDistance
                }
            }
        })
            .skip(skip)
            .limit(limit)
            .toArray()

        const totalRecords = await db.collection('bookstores').countDocuments({
            geometry: {
                $geoWithin: {
                    $centerSphere: [[longitude, latitude], maxDistance / earthRadiusInMeters]
                }
            }
        })

        const result = {
            bookstores,
            pagination: {
                totalRecords,
                totalPages: Math.ceil(totalRecords / limit),
                currentPage: page
            }
        }

        return { status: 200, result }
    } catch (error) {
        console.error(error)
        return { status: 500, result: { message: 'Error fetching nearby bookstores' } }
    }
}

export const getBookstoresNearRoute = async (route, maxDist, limit, page) => {
    try {
        if (!Array.isArray(route) || route.length === 0) {
            return { status: 400, result: { message: 'The route is required and must be an array of coordinates' } }
        }

        if (!route.every(point => Array.isArray(point) && point.length === 2)) {
            return { status: 400, result: { message: 'Each point on the route must be an array [longitude, latitude]' } }
        }

        if (limit > 20) {
            return { status: 400, result: { message: 'The \'limit\' must not be greater than 20' } }
        }

        const skip = (page - 1) * limit
        const routeLine = lineString(route)
        const bufferedRoute = buffer(routeLine, maxDist / 1000, { units: 'kilometers' }).geometry

        const bookstores = await db.collection('bookstores').find({
            geometry: {
                $geoWithin: {
                    $geometry: bufferedRoute
                }
            }
        })
            .skip(skip)
            .limit(limit)
            .toArray()

        const totalRecords = await db.collection('bookstores').countDocuments({
            geometry: {
                $geoWithin: {
                    $geometry: bufferedRoute
                }
            }
        })

        const result = {
            bookstores,
            pagination: {
                totalRecords,
                totalPages: Math.ceil(totalRecords / limit),
                currentPage: page
            }
        }

        return { status: 200, result }
    } catch (error) {
        console.error(error)
        return { status: 500, result: { message: 'Error fetching nearby bookstores along the route' } }
    }
}

export const countBookstoresNearLocation = async (lat, lon, maxDist) => {
    try {
        if (!lat || !lon) {
            return { status: 400, result: { message: 'The latitude is required' } }
        }

        const latitude = parseFloat(lat)
        const longitude = parseFloat(lon)
        const maxDistance = maxDist ? parseInt(maxDist) : 5000
        const earthRadiusInMeters = 6378100

        const count = await db.collection('bookstores').countDocuments({
            geometry: {
                $geoWithin: {
                    $centerSphere: [[longitude, latitude], maxDistance / earthRadiusInMeters]
                }
            }
        })

        return { status: 200, result: { totalBookstores: count } }
    } catch (error) {
        console.error(error)
        return { status: 500, result: { message: 'Error counting nearby bookstores' } }
    }
}

export const isUserInsideFair = async (lat, lon) => {
    try {
        if (!lat || !lon) {
            return { status: 400, result: { message: 'The latitude is required' } }
        }

        const latitude = parseFloat(lat)
        const longitude = parseFloat(lon)

        const userLocation = {
            type: "Point",
            coordinates: [longitude, latitude]
        }

        const bookFair = await db.collection('bookstores').findOne({
            name: "Feira do Livro",
            geometry: {
                $geoIntersects: {
                    $geometry: userLocation
                }
            }
        })
        console.log(bookFair)

        if (bookFair) {
            return { status: 200, result: { inside: true, message: 'The user is inside the Book Fair.' } }
        } else {
            return { status: 200, result: { inside: false, message: 'The user is outside the Book Fair.' } }
        }
    } catch (error) {
        console.error(error)
        return { status: 500, result: { message: 'Error verifying the user\'s location' } }
    }
}

export const createBookstoreStock = async (stock) => {
    try {
        if (!stock || (Array.isArray(stock) && stock.length === 0)) {
            return { status: 400, result: { message: 'The body of the request must contain one or more stock entries' } }
        }

        if (Array.isArray(stock)) {
            const formatedStock = stock.map(entry => ({
                quantity: entry.quantity ?? 1,
                book_id: parseDocumentId(entry.book_id),
                bookstore_id: parseDocumentId(entry.bookstore_id)
            }))
            const result = await db.collection('stock').insertMany(formatedStock)

            return {
                status: 200,
                result: {
                    message: `${result.insertedCount} stock entries added successfully`,
                    insertedIds: result.insertedIds
                }
            }
        } else {
            
            const result = await db.collection('stock').insertOne({
                quantity: stock.quantity ?? 1,
                book_id: parseDocumentId(stock.book_id),
                bookstore_id: parseDocumentId(stock.bookstore_id)
            })

            return {
                status: 200,
                result: {
                    message: `Stock entry added successfully`,
                    insertedIds: result.insertedId
                }
            }
        }
    } catch (error) {
        console.error(error)
        return { status: 500, result: { message: 'Error adding bookstore stock' } }
    }
}
