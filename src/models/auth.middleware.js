const jwt = require("jsonwebtoken");

exports.authenticate = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ error: "Token taqdim etilmagan" });
    }

    const token = authHeader.split(" ")[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Token dekod qilinib, foydalanuvchi ma'lumoti qo'shiladi
        next();
    } catch (error) {
        return res.status(403).json({ error: "Yaroqsiz token" });
    }
};
