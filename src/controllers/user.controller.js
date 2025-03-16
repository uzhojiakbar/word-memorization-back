const db = require("../models/db");

exports.getUserByPhone = (req, res) => {
    const { phonenumber } = req.params;

    if (!phonenumber || phonenumber.length !== 13) {
        return res.status(400).json({ error: "Noto‘g‘ri telefon raqam formati" });
    }

    if (req.user.phonenumber !== phonenumber) {
        return res.status(403).json({ error: "Siz faqat o‘zingiz haqingizda ma’lumot olishingiz mumkin" });
    }

    const query = "SELECT id, fullname, phonenumber, role FROM users WHERE phonenumber = ?";

    db.get(query, [phonenumber], (err, user) => {
        if (err) {
            return res.status(500).json({ error: "Ma'lumot olishda xatolik" });
        }
        if (!user) {
            return res.status(404).json({ error: "Foydalanuvchi topilmadi" });
        }
        res.json(user);
    });
};
