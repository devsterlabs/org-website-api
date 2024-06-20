const { send_response } = require("../common");
const { FileModel } = require("../models");

class FilesController {
  async getById(req, res) {
    try {
      const { id } = req.params;

      const file = await FileModel.findById(id);

      if (!file) {
        return send_response(res, { message: "File not found." }, 404);
      }

      res.set("Content-Type", file.mimetype);
      return res.status(200).send(file.data);
    } catch (error) {
      console.error(error);
      return send_response(
        res,
        { message: "An error occurred while fetching file." },
        500
      );
    }
  }

  async upload(req, res) {
    try {
      if (!req.files || Object.keys(req.files).length === 0) {
        return { message: "No files were uploaded." };
      }

      const { file } = req.files;

      if (!file) {
        return { message: "File is required" };
      }

      const newFile = new FileModel({
        data: file.data,
        mimetype: file.mimetype,
      });

      const savedFile = await newFile.save();

      return { message: "File uploaded", _id: savedFile?._id };
    } catch (error) {
      console.error(error);
      return { message: "An error occurred while uploading file." };
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      const { file } = req.files;

      const updatedFile = await FileModel.findByIdAndUpdate(
        id,
        {
          data: file.data,
          mimetype: file.mimetype,
        },
        { new: true }
      );

      if (!updatedFile) {
        return send_response(res, { message: "File not found." }, 404);
      }

      return send_response(res, { message: "File updated" }, 200);
    } catch (error) {
      console.error(error);
      return send_response(
        res,
        { message: "An error occurred while updating file." },
        500
      );
    }
  }
}

module.exports = { FilesController };
