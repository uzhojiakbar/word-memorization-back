const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/auth.controller");


/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Foydalanuvchini ro‘yxatdan o‘tkazish
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RegisterDTO'
 *     responses:
 *       201:
 *         description: Ro‘yxatdan o‘tish muvaffaqiyatli
 */
router.post("/register", register);

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Tizimga kirish
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               phonenumber:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Tizimga muvaffaqiyatli kirdingiz!
 */
router.post("/login", login);

module.exports = router;
