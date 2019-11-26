const express = require("express")
const router = express.Router()
const controller = require("../controllers/professorasController")
const authMiddleware = require("../middlewares/auth")

router.get("/", controller.get)
router.use(authMiddleware);
router.get("/:id", controller.getById)
router.post("/", controller.post)

module.exports = router
