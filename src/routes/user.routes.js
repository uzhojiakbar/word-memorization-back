const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const {authenticate} = require("../models/auth.middleware");
/**
 * @swagger
 * tags:
 *   name: user
 *   description: User sozlamadi
 */

/**
 * @swagger
 * /user/{phonenumber}:
 *   get:
 *     summary: Telefon raqami bo‘yicha foydalanuvchini topish
 *     tags: [user]
 *     description: Telefon raqamini kiritib, foydalanuvchi haqidagi ma’lumotlarni olish.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: phonenumber
 *         required: true
 *         schema:
 *           type: string
 *           example: "+998901234567"
 *         description: "Foydalanuvchi telefon raqami"
 *     responses:
 *       200:
 *         description: "Foydalanuvchi ma'lumoti"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 fullname:
 *                   type: string
 *                 phonenumber:
 *                   type: string
 *                 role:
 *                   type: string
 *       400:
 *         description: "Noto‘g‘ri telefon raqam formati"
 *       403:
 *         description: "Siz faqat o‘zingiz haqingizda ma’lumot olishingiz mumkin"
 *       404:
 *         description: "Foydalanuvchi topilmadi"
 *       500:
 *         description: "Server xatosi"
 */

router.get("/:phonenumber", authenticate, userController.getUserByPhone);

module.exports = router;
