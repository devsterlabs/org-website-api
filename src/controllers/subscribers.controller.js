const { send_response } = require("../common");
const { SubscriberModel } = require("../models");
const mongoose = require("mongoose");

class SubscribersController {
  async getAll(req, res) {
    try {
      const subscribers = await SubscriberModel.find();
      return send_response(res, subscribers, 200);
    } catch (error) {
      console.error(error);
      return send_response(
        res,
        { message: "An error occurred while fetching subscribers." },
        500
      );
    }
  }
  async post(req, res) {
    try {
      const { email } = req.body;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return send_response(res, { message: "Invalid email format." }, 400);
      }

      const existingSubscriber = await SubscriberModel.findOne({ email });

      if (existingSubscriber) {
        return send_response(
          res,
          { message: "Subscriber already exists." },
          400
        );
      }

      const newSubscriber = new SubscriberModel({ email });
      const savedSubscriber = await newSubscriber.save();

      return send_response(res, savedSubscriber, 201);
    } catch (error) {
      console.error(error);
      return send_response(
        res,
        { message: "An error occurred while creating subscriber." },
        500
      );
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!mongoose.Types.ObjectId.isValid(id)) {
        return send_response(res, { message: "Invalid subscriber ID." }, 400);
      }

      const subscriber = await SubscriberModel.findById(id);

      if (!subscriber) {
        return send_response(res, { message: "Subscriber not found." }, 404);
      }

      await SubscriberModel.findByIdAndDelete(id);

      return send_response(
        res,
        { message: "Subscriber deleted successfully." },
        200
      );
    } catch (error) {
      console.error(error);
      return send_response(
        res,
        { message: "An error occurred while deleting subscriber." },
        500
      );
    }
  }
}

module.exports = { SubscribersController };
