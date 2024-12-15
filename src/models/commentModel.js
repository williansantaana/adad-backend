import db from '../database/config.js'

export const addComment = async ({ book_id, user_id, comment }) => {
    try {
        if (!book_id || !user_id || !comment) {
            return { status: 400, result: { message: 'The parameters book_id, user_id and comment is required' } }
        }

        const newComment = {
            book_id,
            user_id,
            comment,
            date: Date.now().toString()
        }

        const result = await db.collection('comments').insertOne(newComment)

        return { status: 200, result: {
            message: 'Comment added successfully',
            commentId: result.insertedId }
        }
    } catch (error) {
        console.error(error)
        return { status: 500, result: { message: 'Error adding the comment' } }
    }
}

export const deleteCommentById = async (id) => {
    try {
        const result = await db.collection('comments').deleteOne({ _id: id })

        if (result.deletedCount === 0) {
            return { status: 404, result: { message: 'Comment not found' } }
        }

        return { status: 200, result: { message: 'Comment removed successfully' } }
    } catch (error) {
        console.error(error)
        return { status: 500, result: { message: 'Error deleting comment' } }
    }
}