const express = require("express");
const router = express.Router();

/**
 * @swagger
 * /:
 *   get:
 *     summary: Asosiy sahifa
 *     description: Bu endpoint asosiy sahifa uchun
 *     responses:
 *       200:
 *         description: Muvaffaqiyatli javob
 */
router.get("/", (req, res) => {
    res.send(true);
});

module.exports = router;
