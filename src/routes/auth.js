const express = require("express");
const { register, login } = require("../controllers/authController");
const CreateUserDTO = require("../dtos/user.dto");
/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Foydalanuvchi autentifikatsiyasi
 */
const router = express.Router();


/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Foydalanuvchi ro'yxatdan o'tishi uchun
 *     tags: [Auth]
 *     description: Login qilish uchun foydalanuvchi ismi,telefon raqami va paroli majburiy
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Muvaffaqiyatli login
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CreateUserDTO'
 */
router.post("/register", (req, res) => {
    const userData = new CreateUserDTO(req.body); // DTO orqali validatsiya

    res.send(true)
})



module.exports = router;
