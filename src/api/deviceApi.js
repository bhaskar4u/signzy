const Device = require("../model/Device");

module.exports = {
  AddDevice: async (req, res) => {
    try {
      const checkDevice = await Device.findOne({
        DeviceName: req.body.DeviceName,
      });
      if (checkDevice) return res.status(400).send("device already exist");
      const device = new Device({
        DeviceName: req.body.DeviceName,
        DeviceType: req.body.DeviceType,
        DeviceStatus: req.body.DeviceStatus,
      });
      device
        .save()
        .then((doc) => {
          res.status(200).send(doc);
        })
        .catch((err) => {
          res.status(400).send("Device not added");
        });
    } catch (err) {
      res.status(500).send("Something Went Wrong" + JSON.stringify(err));
    }
  },
  ListAllDevice: async (req, res) => {
    try {
      await Device.find({})
        .then((doc) => {
          res.status(200).send(doc);
        })
        .catch((err) => {
          res.status(400).send("Device Not found", err);
        });
    } catch (err) {
      res.status(500).send("something went wrong", err);
    }
  },
  ListDeviceByName: async (req, res) => {
    try {
      await Device.find({ DeviceName: req.params.id })
        .then((doc) => {
          console.log(doc);

          res.status(200).send(JSON.stringify({ doc }));
        })
        .catch((err) => {
          res.status(400).send("Device not Found", err);
        });
    } catch (err) {
      res.status(500).send(err);
    }
  },
  DeleteDevice: async (req, res) => {
    try {
      await Device.findByIdAndDelete({ _id: req.body.id })
        .then((doc) => {
          res.status(200).send(doc.DeviceName);
        })
        .catch((err) => {
          res.status(400).send(err);
        });
    } catch (e) {
      res.status(500).send("Something went Wrong", err);
    }
  },
  UpdateDevice: async (req, res) => {
    try {
      await Device.findByIdAndUpdate({ _id: req.body.id }, req.body, {
        new: true,
      })
        .then((doc) => {
          res.status(200).send(doc);
        })
        .catch((err) => {
          res.status(400).send(err);
        });
    } catch (err) {}
  },
};
