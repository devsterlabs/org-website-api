const mongoose = require("mongoose");
const { send_response } = require("../common");
const { ClientModel } = require("../models");

class Client {
  async getAll(req, res) {
    try {
      const clients = await ClientModel.find({
        data: { $exists: true, $ne: null },
      });

      if (!clients || clients.length === 0) {
        return send_response(res, { message: "No client images found." }, 404);
      }

      const clientImages = clients.map((client) => ({
        _id: client._id,
        title: client.title,
        image: `data:${client.mimetype};base64,${client.data.toString(
          "base64"
        )}`,
      }));

      return send_response(res, clientImages, 200);
    } catch (error) {
      console.error(error);
      return send_response(
        res,
        { message: "An error occurred while fetching client images." },
        500
      );
    }
  }
  async get(req, res) {
    try {
      const { title } = req.params;
      if (!title) {
        return send_response(
          res,
          { message: "Client title is required!" },
          400
        );
      }
      const data = await ClientModel.findOne({ title });
      if (!data) {
        return send_response(res, { message: "No records found!" }, 404);
      }
      res.set("Content-Type", data.mimetype);
      return res.status(200).send(data.data);
    } catch (error) {
      console.error(error);
      return send_response(
        res,
        { message: "An error occurred while fetching the client data." },
        500
      );
    }
  }
  async post(req, res) {
    try {
      if (!req.files || Object.keys(req.files).length === 0) {
        return send_response(res, { message: "No files were uploaded." }, 400);
      }

      const { title } = req.body;
      const image = req.files.image;

      if (!title || !image) {
        return send_response(
          res,
          { message: "Client title and image are required!" },
          400
        );
      }

      const newClient = new ClientModel({
        title: title,
        data: image.data,
        mimetype: image.mimetype,
      });

      const savedClient = await newClient.save();
      return send_response(res, savedClient, 201);
    } catch (error) {
      console.error(error);
      return send_response(
        res,
        { message: "An error occurred while saving the client data." },
        500
      );
    }
  }
  async delete(req, res) {
    try {
      const clientId = req.params.id;
      if (!mongoose.Types.ObjectId.isValid(clientId)) {
        return send_response(res, { message: "Invalid client ID." }, 400);
      }

      const client = await ClientModel.findById(clientId);

      if (!client) {
        return send_response(res, { message: "Client image not found." }, 404);
      }

      await ClientModel.findByIdAndDelete(clientId);

      return send_response(
        res,
        { message: "Client image deleted successfully." },
        200
      );
    } catch (error) {
      console.error(error);
      return send_response(
        res,
        { message: "An error occurred while deleting client image." },
        500
      );
    }
  }
}

module.exports = {
  ClientController: Client,
};
