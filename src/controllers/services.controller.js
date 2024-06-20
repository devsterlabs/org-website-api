const { send_response } = require("../common");
const { ServiceModel } = require("../models");
const mongoose = require("mongoose");

class ServicesController {
  async getAll(req, res) {
    try {
      const services = await ServiceModel.find();
      return send_response(res, services, 200);
    } catch (error) {
      console.error(error);
      return send_response(
        res,
        { message: "An error occurred while fetching services." },
        500
      );
    }
  }

  async getById(req, res) {
    try {
      const { id } = req.params;

      if (!mongoose.Types.ObjectId.isValid(id)) {
        return send_response(res, { message: "Invalid service ID." }, 400);
      }

      const service = await ServiceModel.findById(id);

      if (!service) {
        return send_response(res, { message: "Service not found." }, 404);
      }

      return send_response(res, service, 200);
    } catch (error) {
      console.error(error);
      return send_response(
        res,
        { message: "An error occurred while fetching service." },
        500
      );
    }
  }

  async post(req, res) {
    try {
      const { title } = req.body;

      if (!title) {
        return send_response(
          res,
          { message: "Service title is required." },
          400
        );
      }

      const existingService = await ServiceModel.findOne({ title });

      if (existingService) {
        return send_response(
          res,
          { message: "Service with this title already exists." },
          400
        );
      }

      const newService = new ServiceModel({ title });
      const savedService = await newService.save();

      return send_response(res, savedService, 201);
    } catch (error) {
      console.error(error);
      return send_response(
        res,
        { message: "An error occurred while creating service." },
        500
      );
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const { title } = req.body;

      if (!mongoose.Types.ObjectId.isValid(id)) {
        return send_response(res, { message: "Invalid service ID." }, 400);
      }

      const service = await ServiceModel.findById(id);

      if (!service) {
        return send_response(res, { message: "Service not found." }, 404);
      }

      service.title = title;
      const updatedService = await service.save();

      return send_response(res, updatedService, 200);
    } catch (error) {
      console.error(error);
      return send_response(
        res,
        { message: "An error occurred while updating service." },
        500
      );
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!mongoose.Types.ObjectId.isValid(id)) {
        return send_response(res, { message: "Invalid service ID." }, 400);
      }

      const service = await ServiceModel.findById(id);

      if (!service) {
        return send_response(res, { message: "Service not found." }, 404);
      }

      await ServiceModel.findByIdAndDelete(id);

      return send_response(
        res,
        { message: "Service deleted successfully." },
        200
      );
    } catch (error) {
      console.error(error);
      return send_response(
        res,
        { message: "An error occurred while deleting service." },
        500
      );
    }
  }
}

module.exports = { ServicesController };
