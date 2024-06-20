const { send_response } = require("../common");
const { TeamModel } = require("../models");
const { FilesController } = require("./file.controller");

class TeamController {
  async post(req, res) {
    try {
      const filesController = new FilesController();
      const uploadResponse = await filesController.upload(req, res);
      const fileId = uploadResponse?._id;

      if (!fileId) {
        return send_response(
          res,
          { message: uploadResponse?.message || "Error while uploading image." },
          400
        );
      }

      const { name, position, links } = req.body;

      if(!name || !position){
        return send_response(
            res,
            { message: "Name and positions are required" },
            400
          );
      }

      const newTeamMember = new TeamModel({
        name,
        position,
        links: JSON.parse(links),
        image: fileId,
      });

      const savedTeamMember = await newTeamMember.save();

      return send_response(res, savedTeamMember, 201);
    } catch (error) {
      console.error(error);
      return send_response(
        res,
        { message: "An error occurred while creating team member." },
        500
      );
    }
  }

  async getAll(req, res) {
    try {
      const teamMembers = await TeamModel.find();
      return send_response(res, teamMembers, 200);
    } catch (error) {
      console.error(error);
      return send_response(
        res,
        { message: "An error occurred while fetching team members." },
        500
      );
    }
  }

  async getById(req, res) {
    try {
      const { id } = req.params;

      const teamMember = await TeamModel.findById(id);

      if (!teamMember) {
        return send_response(res, { message: "Team member not found." }, 404);
      }

      return send_response(res, teamMember, 200);
    } catch (error) {
      console.error(error);
      return send_response(
        res,
        { message: "An error occurred while fetching team member." },
        500
      );
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const { name, position, links } = req.body;

      const updatedTeamMember = await TeamModel.findByIdAndUpdate(
        id,
        { name, position, links },
        { new: true }
      );

      if (!updatedTeamMember) {
        return send_response(res, { message: "Team member not found." }, 404);
      }

      return send_response(res, updatedTeamMember, 200);
    } catch (error) {
      console.error(error);
      return send_response(
        res,
        { message: "An error occurred while updating team member." },
        500
      );
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      const deletedTeamMember = await TeamModel.findByIdAndDelete(id);

      if (!deletedTeamMember) {
        return send_response(res, { message: "Team member not found." }, 404);
      }

      return send_response(
        res,
        { message: "Team member deleted successfully." },
        200
      );
    } catch (error) {
      console.error(error);
      return send_response(
        res,
        { message: "An error occurred while deleting team member." },
        500
      );
    }
  }
}

module.exports = { TeamController };
