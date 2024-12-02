import db from '../database/config.js'

export const getBooks = async (limit, page) => {
    try {
        if (limit > 20) {
            return { status: 400, result: { message: 'The \'limit\' must not be greater than 20' } }
        }

        const skip = (page - 1) * limit
        const books = await db.collection('books')
            .find({})
            .skip(skip)
            .limit(limit)
            .toArray()

        const totalRecords = await db.collection('books').countDocuments()

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
        return { status: 500, result: { message: 'Error fetching books' } }
    }
}

export const createBooks = async (books) => {
    try {
        if (!books || (Array.isArray(books) && books.length === 0)) {
            return { status: 400, result: { message: 'The body of the request must contain one or more books' } }
        }

        if (Array.isArray(books)) {
            const result = await db.collection('books').insertMany(books)

            return {
                status: 200,
                result: {
                    message: `${result.insertedCount} books added successfully`,
                    insertedIds: result.insertedIds
                }
            }
        } else {
            const result = await db.collection('books').insertOne(books)

            return {
                status: 200,
                result: {
                    message: `Book added successfully`,
                    insertedIds: result.insertedId
                }
            }
        }
    } catch (error) {
        console.error(error)
        return { status: 500, result: { message: 'Error creating new book' } }
    }
}

export const getBook = async (id) => {
    try {
        const book = await db.collection('books').findOne({ _id: id })

        if (!book) {
            return { status: 404, result: { message: `Book with id: ${id} not found` } }
        }

        const averageScore = await db.collection('users').aggregate([
            { $unwind: "$reviews" },
            { $match: { "reviews.book_id": id } },
            { $group: { _id: "$reviews.book_id", averageScore: { $avg: "$reviews.score" } } }
        ]).toArray()

        const comments = await db.collection('comments').find({ book_id: id }).toArray()

        const result = {
            book: book,
            averageScore: averageScore.length ? averageScore[0].averageScore : null,
            comments: comments
        }

        return { status: 200, result }
    } catch (error) {
        console.error(error)
        return { status: 500, result: { message: 'Error fetching book' } }
    }
}

export const deleteBook = async (id) => {
    try {
        const result = await db.collection('books').deleteOne({ _id: id })

        if (result.deletedCount === 1) {
            return { status: 200, result: { message: `Book with id ${id} deleted with success` } }
        }

        return { status: 404, result: { message: `Book with id ${id} not found` } }
    } catch (error) {
        console.error(error)
        return { status: 500, result: { message: 'Error deleting book' } }
    }
}

export const updateBook = async (id, book) => {
    try {
        const result = await db.collection('books').updateOne(
            { _id: id },
            { $set: book }
        )

        if (result.matchedCount === 0) {
            return { status: 404, result: { message: `Book with id ${id} not found` } }
        }

        return { status: 200, result: { message: `Book with id ${id} updated with success` } }
    } catch (error) {
        console.error(error)
        return { status: 500, result: { message: 'Error updating book' } }
    }
}

export const getTopBooks = async (limit, page) => {
    try {
        if (limit > 20) {
            return { status: 400, result: { message: 'The \'limit\' must not be greater than 20' } }
        }

        const skip = (page - 1) * limit
        const books = await db.collection('books').aggregate([
            {
                $lookup: {
                    from: "users",
                    localField: "_id",
                    foreignField: "reviews.book_id",
                    as: "userReviews"
                }
            },
            { $unwind: "$userReviews" },
            { $unwind: "$userReviews.reviews" },
            { $match: { $expr: { $eq: ["$userReviews.reviews.book_id", "$_id"] } } },
            {
                $group: {
                    _id: "$_id",
                    title: { $first: "$title" },
                    isbn: { $first: "$isbn" },
                    pageCount: { $first: "$pageCount" },
                    publishedDate: { $first: "$publishedDate" },
                    thumbnailUrl: { $first: "$thumbnailUrl" },
                    shortDescription: { $first: "$shortDescription" },
                    longDescription: { $first: "$longDescription" },
                    status: { $first: "$status" },
                    authors: { $first: "$authors" },
                    categories: { $first: "$categories" },
                    averageScore: { $avg: "$userReviews.reviews.score" }
                }
            },
            { $sort: { averageScore: -1 } },
            { $skip: skip },
            { $limit: limit }
        ]).toArray()

        const totalDocuments = await db.collection('books').aggregate([
            {
                $lookup: {
                    from: "users",
                    localField: "_id",
                    foreignField: "reviews.book_id",
                    as: "userReviews"
                }
            },
            { $unwind: "$userReviews" },
            { $unwind: "$userReviews.reviews" },
            { $match: { $expr: { $eq: ["$userReviews.reviews.book_id", "$_id"] } } },
            {
                $group: {
                    _id: "$_id"
                }
            },
            { $count: "totalDocuments" }
        ]).toArray()
        console.log(totalDocuments)

        const totalRecords = totalDocuments.length > 0 ? totalDocuments[0].totalDocuments : 0

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
        return { status: 500, result: { message: 'Error fetching the books with highest score' } }
    }
}

export const getBooksByRatings = async (order, limit, page) => {
    try {
        if (limit > 20) {
            return { status: 400, result: { message: 'The \'limit\' must not be greater than 20' } }
        }

        if (order !== "asc" && order !== "desc") {
            return { status: 400, result: { message: 'Order must be \'asc\' or \'desc\'' } }
        }

        const skip = (page - 1) * limit
        const sortOrder = order === "asc" ? 1 : -1
        const books = await db.collection('books').aggregate([
            {
                $lookup: {
                    from: "users",
                    localField: "_id",
                    foreignField: "reviews.book_id",
                    as: "userReviews"
                }
            },
            { $unwind: "$userReviews" },
            { $unwind: "$userReviews.reviews" },
            { $match: { $expr: { $eq: ["$userReviews.reviews.book_id", "$_id"] } } },
            {
                $group: {
                    _id: "$_id",
                    title: { $first: "$title" },
                    authors: { $first: "$authors" },
                    pageCount: { $first: "$pageCount" },
                    publishedDate: { $first: "$publishedDate" },
                    thumbnailUrl: { $first: "$thumbnailUrl" },
                    totalReviews: { $sum: 1 }
                }
            },
            { $sort: { totalReviews: sortOrder } },
            { $skip: skip },
            { $limit: limit }
        ]).toArray()

        const totalDocuments = await db.collection('books').aggregate([
            {
                $lookup: {
                    from: "users",
                    localField: "_id",
                    foreignField: "reviews.book_id",
                    as: "userReviews"
                }
            },
            { $unwind: "$userReviews" },
            { $unwind: "$userReviews.reviews" },
            { $match: { $expr: { $eq: ["$userReviews.reviews.book_id", "$_id"] } } },
            {
                $group: {
                    _id: "$_id",
                    totalReviews: { $sum: 1 }
                }
            },
            { $count: "totalDocuments" }
        ]).toArray()

        const totalRecords = totalDocuments.length > 0 ? totalDocuments[0].totalDocuments : 0

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
        return { status: 500, result: { message: 'Error fetching books sorted by reviews' } }
    }
}

export const getFiveStarBooks = async (limit, page) => {
    try {
        if (limit > 20) {
            return { status: 400, result: { message: 'The \'limit\' must not be greater than 20' } }
        }

        const skip = (page - 1) * limit
        const books = await db.collection('books').aggregate([
            {
                $lookup: {
                    from: "users",
                    localField: "_id",
                    foreignField: "reviews.book_id",
                    as: "userReviews"
                }
            },
            { $unwind: "$userReviews" },
            { $unwind: "$userReviews.reviews" },
            { $match: { "userReviews.reviews.score": 5 } },
            {
                $group: {
                    _id: "$_id",
                    title: { $first: "$title" },
                    isbn: { $first: "$isbn" },
                    pageCount: { $first: "$pageCount" },
                    publishedDate: { $first: "$publishedDate" },
                    thumbnailUrl: { $first: "$thumbnailUrl" },
                    shortDescription: { $first: "$shortDescription" },
                    longDescription: { $first: "$longDescription" },
                    status: { $first: "$status" },
                    authors: { $first: "$authors" },
                    categories: { $first: "$categories" },
                    fiveStarReviews: { $sum: 1 }
                }
            },
            { $skip: skip },
            { $limit: limit }
        ]).toArray()

        const totalDocuments = await db.collection('books').aggregate([
            {
                $lookup: {
                    from: "users",
                    localField: "_id",
                    foreignField: "reviews.book_id",
                    as: "userReviews"
                }
            },
            { $unwind: "$userReviews" },
            { $unwind: "$userReviews.reviews" },
            { $match: { "userReviews.reviews.score": 5 } },
            {
                $group: {
                    _id: "$_id",
                    fiveStarReviews: { $sum: 1 }
                }
            },
            { $count: "totalDocuments" }
        ]).toArray()

        const totalRecords = totalDocuments.length > 0 ? totalDocuments[0].totalDocuments : 0

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
        return { status: 500, result: { message: 'Error fetching books with 5 stars' } }
    }
}

export const getBooksByYear = async (year, limit, page) => {
    try {
        if (isNaN(year) || year < 0) {
            return { status: 400, result: { message: 'Invalid year' } }
        }

        if (limit > 20) {
            return { status: 400, result: { message: 'The \'limit\' must not be greater than 20' } }
        }

        const skip = (page - 1) * limit
        const startOfYear = new Date(`${year}-01-01`)
        const endOfYear = new Date(`${year}-12-31`)

        const books = await db.collection('books').aggregate([
            {
                $lookup: {
                    from: "users",
                    localField: "_id",
                    foreignField: "reviews.book_id",
                    as: "userReviews"
                }
            },
            { $unwind: "$userReviews" },
            { $unwind: "$userReviews.reviews" },
            {
                $addFields:
                    {
                        reviewDateTimestamp: { $toLong: "$userReviews.reviews.review_date" }
                    }
            },
            {
                $match: {
                    "reviewDateTimestamp": {
                        $gte: startOfYear.getTime(),
                        $lte: endOfYear.getTime()
                    }
                }
            },
            {
                $group: {
                    _id: "$_id",
                    title: { $first: "$title" },
                    isbn: { $first: "$isbn" },
                    pageCount: { $first: "$pageCount" },
                    publishedDate: { $first: "$publishedDate" },
                    thumbnailUrl: { $first: "$thumbnailUrl" },
                    shortDescription: { $first: "$shortDescription" },
                    longDescription: { $first: "$longDescription" },
                    status: { $first: "$status" },
                    authors: { $first: "$authors" },
                    categories: { $first: "$categories" }
                }
            },
            { $skip: skip },
            { $limit: limit }
        ]).toArray()

        const totalDocuments = await db.collection('books').aggregate([
            {
                $lookup: {
                    from: "users",
                    localField: "_id",
                    foreignField: "reviews.book_id",
                    as: "userReviews"
                }
            },
            { $unwind: "$userReviews" },
            { $unwind: "$userReviews.reviews" },
            {
                $match: {
                    "userReviews.reviews.review_date": {
                        $gte: startOfYear.getTime(),
                        $lte: endOfYear.getTime()
                    }
                }
            },
            { $count: "totalDocuments" }
        ]).toArray()

        const totalRecords = totalDocuments.length > 0 ? totalDocuments[0].totalDocuments : 0

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
        return { status: 500, result: { message: 'Error fetching books rated this year' } }
    }
}

export const getBooksByComments = async (limit, page) => {
    try {
        if (limit > 20) {
            return { status: 400, result: { message: 'The \'limit\' must not be greater than 20' } }
        }

        const skip = (page - 1) * limit
        const books = await db.collection('books').aggregate([
            {
                $lookup: {
                    from: "comments",
                    localField: "_id",
                    foreignField: "book_id",
                    as: "bookComments"
                }
            },
            { $match: { "bookComments.0": { $exists: true } } },
            {
                $project: {
                    _id: 1,
                    title: 1,
                    isbn: 1,
                    pageCount: 1,
                    publishedDate: 1,
                    thumbnailUrl: 1,
                    shortDescription: 1,
                    longDescription: 1,
                    status: 1,
                    authors: 1,
                    categories: 1,
                    totalComments: { $size: "$bookComments" }
                }
            },
            { $sort: { totalComments: -1 } },
            { $skip: skip },
            { $limit: limit }
        ]).toArray()

        const totalDocuments = await db.collection('books').aggregate([
            {
                $lookup: {
                    from: "comments",
                    localField: "_id",
                    foreignField: "book_id",
                    as: "bookComments"
                }
            },
            { $match: { "bookComments.0": { $exists: true } } },
            { $count: "totalDocuments" }
        ]).toArray()

        const totalRecords = totalDocuments.length > 0 ? totalDocuments[0].totalDocuments : 0

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
        return { status: 500, result: { message: 'Error fetching books with comments' } }
    }
}

export const getReviewsByJob = async (limit, page) => {
    try {
        if (limit > 20) {
            return { status: 400, result: { message: 'The \'limit\' must not be greater than 20' } }
        }

        const skip = (page - 1) * limit
        const reviewsByJob = await db.collection('users').aggregate([
            { $unwind: "$reviews" },
            {
                $group: {
                    _id: "$job",
                    totalReviews: { $sum: 1 }
                }
            },
            {
                $project: {
                    _id: 0,
                    job: "$_id",
                    totalReviews: 1
                }
            },
            { $skip: skip },
            { $limit: limit }
        ]).toArray()

        const totalReviewsByJob = await db.collection('users').aggregate([
            { $unwind: "$reviews" },
            {
                $group: {
                    _id: "$job",
                    totalReviews: { $sum: 1 }
                }
            }
        ]).toArray()

        const totalRecords = totalReviewsByJob.length

        const result = {
            reviewsByJob,
            pagination: {
                totalRecords,
                totalPages: Math.ceil(totalRecords / limit),
                currentPage: page
            }
        }

        return { status: 200, result }
    } catch (error) {
        console.error(error)
        return { status: 500, result: { message: 'Error fetching the total number of reviews per job' } }
    }
}

export const getFilteredBooks = async (price, category, author, limit, page) => {
    try {
        if (limit > 20) {
            return { status: 400, result: { message: 'The \'limit\' must not be greater than 20' } }
        }
        const skip = (page - 1) * limit
        const query = {}

        if (price) {
            const [minPrice, maxPrice] = price.split('-').map(Number)
            query.price = { $gte: minPrice, $lte: maxPrice }
        }

        if (category) {
            query.categories = category
        }

        if (author) {
            query.authors = author
        }

        const books = await db.collection('books')
            .find(query)
            .skip(skip)
            .limit(limit)
            .toArray()

        const totalRecords = await db.collection('books').countDocuments(query)

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
        return { status: 500, result: { message: 'Error fetching filtered books' } }
    }
}