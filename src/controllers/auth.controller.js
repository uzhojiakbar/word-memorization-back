const db = require("../models/db");
const bcrypt = require("bcrypt");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const {RegisterDTO} = require("../dtos/auth.dto");
require("dotenv").config();

exports.register = (req, res) => {
    try {
        const userData = new RegisterDTO(req.body);

        // Parolni hash qilish
        bcrypt.hash(userData.password, 10, (err, hash) => {
            if (err) {
                return res.status(500).json({error: "Parolni hash qilishda xatolik"});
            }

            db.run(
                "INSERT INTO users (fullname, phonenumber, password) VALUES (?, ?, ?)",
                [userData.fullname, userData.phonenumber, hash],
                function (err) {
                    if (err) {
                        return res.status(400).json({error: "Bu telefon raqam allaqachon ro‘yxatdan o‘tgan!"});
                    }
                    res.status(201).json({message: "Foydalanuvchi yaratildi!"});
                }
            );
        });
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

const sqlite3 = require("sqlite3").verbose();

exports.login = (req, res) => {
    const {phonenumber, password} = req.body;

    if (!phonenumber || !password) {
        return res.status(400).json({error: "Telefon raqam va parol kerak"});
    }

    db.get("SELECT * FROM users WHERE phonenumber = ?", [phonenumber], async (err, user) => {
        if (err) {
            return res.status(500).json({error: "Ma'lumotlar bazasi xatosi", details: err.message});
        }

        if (!user) {
            return res.status(400).json({error: "Foydalanuvchi topilmadi"});
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({error: "Noto'g'ri parol"});
        }

        // ✅ JWT_SECRET borligini tekshiramiz
        if (!process.env.JWT_SECRET || !process.env.JWT_REFRESH_SECRET) {
            console.log("Secret:",process.env.JWT_SECRET)
            console.log("Refresh",process.env.JWT_REFRESH_SECRET)
            return res.status(500).json({error: "JWT_SECRET yoki JWT_REFRESH_SECRET aniqlanmagan!"});
        }

        const accessToken = jwt.sign(
            {id: user.id, phonenumber: user.phonenumber, role: user.role},
            process.env.JWT_SECRET,
            {expiresIn: "1h"} // Access token muddati
        );

        const refreshToken = jwt.sign(
            {id: user.id},
            process.env.JWT_REFRESH_SECRET,
            {expiresIn: "7d"} // Refresh token muddati
        );

        res.json({
            accessToken,
            refreshToken,
        });
    });
};
