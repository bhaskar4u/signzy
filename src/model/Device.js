const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const deviceSchema = new Schema({
  DeviceName: {
    type: String,
  },
  DeviceType: {
    type: String,
  },
  DeviceStatus: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("SmartDevice", deviceSchema);
