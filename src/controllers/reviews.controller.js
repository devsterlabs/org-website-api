const { send_response } = require("../common");
const { ReviewModel } = require("../models");
const mongoose = require("mongoose");

class ReviewsController {
  async getAll(req, res) {
    try {
      const reviews = await ReviewModel.find();
      return send_response(res, reviews, 200);
    } catch (error) {
      console.error(error);
      return send_response(
        res,
        { message: "An error occurred while fetching reviews." },
        500
      );
    }
  }

  async getById(req, res) {
    try {
      const { id } = req.params;

      if (!mongoose.Types.ObjectId.isValid(id)) {
        return send_response(res, { message: "Invalid review ID." }, 400);
      }

      const review = await ReviewModel.findById(id);

      if (!review) {
        return send_response(res, { message: "Review not found." }, 404);
      }

      return send_response(res, review, 200);
    } catch (error) {
      console.error(error);
      return send_response(
        res,
        { message: "An error occurred while fetching review." },
        500
      );
    }
  }

  async post(req, res) {
    try {
      const { client_name, comment, rating, url } = req.body;

      const newReview = new ReviewModel({ client_name, comment, rating, url });
      const savedReview = await newReview.save();

      return send_response(res, savedReview, 201);
    } catch (error) {
      console.error(error);
      return send_response(
        res,
        { message: "An error occurred while creating review." },
        500
      );
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const { client_name, comment, rating, url } = req.body;

      if (!mongoose.Types.ObjectId.isValid(id)) {
        return send_response(res, { message: "Invalid review ID." }, 400);
      }

      const review = await ReviewModel.findById(id);

      if (!review) {
        return send_response(res, { message: "Review not found." }, 404);
      }

      review.client_name = client_name;
      review.comment = comment;
      review.rating = rating;
      review.url = url;

      const updatedReview = await review.save();

      return send_response(res, updatedReview, 200);
    } catch (error) {
      console.error(error);
      return send_response(
        res,
        { message: "An error occurred while updating review." },
        500
      );
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!mongoose.Types.ObjectId.isValid(id)) {
        return send_response(res, { message: "Invalid review ID." }, 400);
      }

      const review = await ReviewModel.findById(id);

      if (!review) {
        return send_response(res, { message: "Review not found." }, 404);
      }

      await ReviewModel.findByIdAndDelete(id);

      return send_response(
        res,
        { message: "Review deleted successfully." },
        200
      );
    } catch (error) {
      console.error(error);
      return send_response(
        res,
        { message: "An error occurred while deleting review." },
        500
      );
    }
  }
}

module.exports = { ReviewsController };
