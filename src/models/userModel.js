import db from '../database/config.js'


export const getUsers = async (limit, page) => {
    try {
        if (limit > 20) {
            return { status: 400, result: { message: 'The \'limit\' must not be greater than 20' } }
        }

        const skip = (page - 1) * limit
        const users = await db.collection('users')
            .find({})
            .skip(skip)
            .limit(limit)
            .toArray()

        const totalRecords = await db.collection('users').countDocuments()

        const result = {
            users,
            pagination: {
                totalRecords,
                totalPages: Math.ceil(totalRecords / limit),
                currentPage: page
            }
        }

        return { status: 200, result }
    } catch (error) {
        console.error(error)
        return { status: 500, result: { message: 'Error fetching users' } }
    }
}

export const createUsers = async (users) => {
    try {
        if (!users || (Array.isArray(users) && users.length === 0)) {
            return { status: 400, result: { message: 'The body of the request must contain one or more users' } }
        }

        if (Array.isArray(users)) {
            const result = await db.collection('users').insertMany(users)

            return {
                status: 200,
                result: {
                    message: `${result.insertedCount} users added successfully`,
                    insertedIds: result.insertedIds
                }
            }
        } else {
            const result = await db.collection('users').insertOne(users)

            return {
                status: 200,
                result: {
                    message: `User added successfully`,
                    insertedIds: result.insertedId
                }
            }
        }
    } catch (error) {
        console.error(error)
        return { status: 500, result: { message: 'Error creating new user' } }
    }
}

export const getUser = async (id) => {
    try {
        const user = await db.collection('users').findOne({ _id: id })

        if (!user) {
            return { status: 404, result: { message: `User with id: ${id} not found` } }
        }

        const topBooks = await db.collection('users').aggregate([
            { $match: { _id: id } },
            { $unwind: "$reviews" },
            {
                $group: {
                    _id: "$reviews.book_id",
                    book_id: { $first: "$reviews.book_id" },
                    score: { $max: "$reviews.score" }
                }
            },
            { $sort: { score: -1 } },
            { $limit: 3 },
            {
                $lookup: {
                    from: "books",
                    localField: "book_id",
                    foreignField: "_id",
                    as: "books"
                }
            },
            { $unwind: "$books" },
            {
                $replaceRoot: { newRoot: "$books" }
            }
        ]).toArray()

        const result = {
            ...user,
            topBooks
        }

        return { status: 200, result: result }
    } catch (error) {
        console.error(error)
        return { status: 500, result: { message: 'Error fetching user' } }
    }
}

export const deleteUser = async (id) => {
    try {
        const result = await db.collection('users').deleteOne({ _id: id })

        if (result.deletedCount === 1) {
            return { status: 200, result: { message: `User with id ${id} deleted successfully` } }
        }

        return { status: 404, result: { message: `User with id ${id} not found` } }
    } catch (error) {
        console.error(error)
        return { status: 500, result: { message: 'Error deleting user' } }
    }
}

export const updateUser = async (id, user) => {
    try {
        const result = await db.collection('users').updateOne(
            { _id: id },
            { $set: user }
        )

        if (result.matchedCount === 0) {
            return { status: 404, result: { message: `User with id ${id} not found` } }
        }

        return { status: 200, result: { message: `User with id ${id} updated successfully` } }
    } catch (error) {
        console.error(error)
        return { status: 500, result: { message: 'Error updating user' } }
    }
}