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
    res.send("Salom, Swagger bilan Express API! 🚀");
});

/**
 * @swagger
 * /user:
 *   post:
 *     summary: Yangi foydalanuvchi yaratish
 *     description: Bu endpoint yangi foydalanuvchi qo‘shish uchun
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
 *     responses:
 *       201:
 *         description: Foydalanuvchi yaratildi
 */
router.post("/user", (req, res) => {
    res.status(201).send({ message: "Foydalanuvchi yaratildi", data: req.body });
});

/**
 * @swagger
 * /user/{id}:
 *   put:
 *     summary: Foydalanuvchi ma’lumotlarini yangilash
 *     description: Bu endpoint foydalanuvchi ma’lumotlarini yangilash uchun
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
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
 *     responses:
 *       200:
 *         description: Foydalanuvchi yangilandi
 */
router.put("/user/:id", (req, res) => {
    res.send({ message: `Foydalanuvchi ${req.params.id} yangilandi`, data: req.body });
});

/**
 * @swagger
 * /user/{id}:
 *   patch:
 *     summary: Foydalanuvchi ma’lumotlarini qisman yangilash
 *     description: Bu endpoint foydalanuvchi ma’lumotlarining faqat bir qismini yangilash uchun
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: Foydalanuvchi ma’lumotlari qisman yangilandi
 */
router.patch("/user/:id", (req, res) => {
    res.send({ message: `Foydalanuvchi ${req.params.id} qisman yangilandi`, data: req.body });
});

/**
 * @swagger
 * /user/{id}:
 *   delete:
 *     summary: Foydalanuvchini o‘chirish
 *     description: Bu endpoint foydalanuvchini o‘chirish uchun
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Foydalanuvchi o‘chirildi
 */
router.delete("/user/:id", (req, res) => {
    res.send({ message: `Foydalanuvchi ${req.params.id} o‘chirildi` });
});

module.exports = router;
