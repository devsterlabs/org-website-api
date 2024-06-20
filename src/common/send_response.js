const send_response = (res, data, status = 200) =>
  res.status(status).json(data);
module.exports = { send_response };
