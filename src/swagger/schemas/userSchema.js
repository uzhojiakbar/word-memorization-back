/**
 * @swagger
 * components:
 *   schemas:
 *     CreateUserDTO:
 *       type: object
 *       required:
 *         - fullname
 *         - phonenumber
 *         - password
 *       properties:
 *         fullname:
 *           type: string
 *           description: Foydalanuvchi ismi
 *           example: "Gulhayo"
 *         phonenumber:
 *           type: string
 *           description: Foydalanuvchi telefon raqami (+998901234567)
 *           example: "+998901234567"
 *         password:
 *           type: string
 *           description: Foydalanuvchi paroli (kamida 6 ta belgi)
 *           example: "strongpass123"
 */
