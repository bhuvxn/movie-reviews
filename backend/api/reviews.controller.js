import ReviewsDAO from "../dao/reviewsDAO";

export default class ReviewsController {
    static async apiPostReview(req, res, next) {
        try {
            const movieId = req.body.move_id
            const review = req.body.review_id
            const userInfo = {
                name: req.body.name,
                _id: req.body.user_id
            }
            const date = new Date();
            const ReviewResponse = await ReviewsDAO.addReview(
                movieId,
                userInfo,
                review,
                date

            )
            res.json({ status: "success" })
        } catch (e) {
            res.status(500).json({ error: e.message })
        }
    }
    static async apiUpdateReview(req, res, next) {
        try {
            const reviewId = req.body.review_id
            const reviewResponse = await ReviewsDAO.updateReview(
                reviewId,
                req.body.user_id,
                review,
                date
            )
            var { error } = reviewResponse
            if (error) {
                res.status.json({ error })
            }
            if (ReviewResponse.modifiedCount === 0) {
                throw new Error("unable to update review. User is not original poster")
            }
            res.json({ status: "success" })
        } catch (e) {
            res.status(500).json({ error: e.message })
        }
    }
}