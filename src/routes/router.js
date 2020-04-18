const router = require("express").Router();
const DeviceApi = require("../api/deviceApi");

router.post("/addDevice", DeviceApi.AddDevice);
router.get("/allDeviceList", DeviceApi.ListAllDevice);
router.get("/byDeviceType/:id", DeviceApi.ListDeviceByName);
router.post("/deleteDevice", DeviceApi.DeleteDevice);
router.put("/updateDevice", DeviceApi.UpdateDevice);

module.exports = router;
