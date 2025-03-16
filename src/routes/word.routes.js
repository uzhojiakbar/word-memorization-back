const express = require("express");
const { addWord, getWords } = require("../controllers/word.controller");
const authMiddleware = require("../middleware/auth.middleware");
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: db
 *   description: Database
 */


/**
 * @swagger
 * /words:
 *   post:
 *     summary: Yangi so‘z qo‘shish
 *     tags: [db]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/WordDTO'
 *     responses:
 *       201:
 *         description: Yangi so‘z muvaffaqiyatli qo‘shildi
 *       401:
 *         description: Token talab qilinadi
 */
router.post("/", authMiddleware, addWord);


/**
 * @swagger
 * /words:
 *   get:
 *     summary: Foydalanuvchining barcha so‘zlarini olish (filter bilan)
 *     tags: [db]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: eng
 *         schema:
 *           type: string
 *         description: Inglizcha so‘z bo‘yicha filter
 *       - in: query
 *         name: uz
 *         schema:
 *           type: string
 *         description: O‘zbekcha so‘z bo‘yicha filter
 *       - in: query
 *         name: date
 *         schema:
 *           type: string
 *           format: date
 *         description: Sana bo‘yicha filter (YYYY-MM-DD)
 *     responses:
 *       200:
 *         description: Foydalanuvchining so‘zlari ro‘yxati (filter bilan)
 *       401:
 *         description: Token talab qilinadi
 */
router.get("/", authMiddleware, getWords);


module.exports = router;
