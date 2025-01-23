const express = require("express");
const policyAssistantController = require("../controllers/policyAssistantController");
const router = express.Router();

router.post("/policy-assistant", policyAssistantController.policyAssistant);

module.exports = router;
