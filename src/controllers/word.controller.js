const db = require("../models/db");

// So‘z qo‘shish
exports.addWord =  (req, res) => {
    const { eng, uz, date } = req.body;
    const userId = req.user.id;

    // Agar date berilmasa, bugungi sanani olamiz
    const wordDate = date ? date : new Date().toISOString().split("T")[0];

    const sql = `INSERT INTO words (eng, uz, date, user_id) VALUES (?, ?, ?, ?)`;
    db.run(sql, [eng, uz, wordDate, userId], function (err) {
        if (err) return res.status(500).json({ error: "So‘z qo‘shishda xatolik!" });

        res.status(201).json({
            message: "So‘z muvaffaqiyatli qo‘shildi!",
            word: {
                id: this.lastID,
                eng,
                uz,
                date: wordDate,
                user_id: userId
            }
        });
    });
};

exports.getWords = (req, res) => {
    let { eng, uz, date } = req.query; // Query params olish
    let sql = "SELECT id, date, eng, uz FROM words WHERE user_id = ?";
    let params = [req.user.id];

    let conditions = []; // Shartlarni saqlash uchun massiv

    if (eng) {
        conditions.push("eng LIKE ?");
        params.push(`%${eng}%`);
    }
    if (uz) {
        conditions.push("uz LIKE ?");
        params.push(`%${uz}%`);
    }
    if (date) {
        conditions.push("date LIKE ?");
        params.push(`${date}%`);
    }

    // Agar shartlar bo‘lsa, WHERE ga qo‘shish
    if (conditions.length > 0) {
        sql += " AND " + conditions.join(" AND ");
    }

    sql += " ORDER BY date DESC"; // Yangi so‘zlar birinchi chiqishi uchun

    db.all(sql, params, (err, rows) => {
        if (err) return res.status(500).json({ error: "Ma‘lumot olishda xatolik!" });
        res.json(rows);
    });
};
