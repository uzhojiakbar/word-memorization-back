class RegisterDTO {
    constructor({ fullname, phonenumber, password }) {
        if (!fullname || typeof fullname !== "string") {
            throw new Error("Ism noto‘g‘ri");
        }
        if (!phonenumber || !/^\+998\d{9}$/.test(phonenumber)) {
            throw new Error("Telefon raqam noto‘g‘ri formatda");
        }
        if (!password || password.length < 6) {
            throw new Error("Parol kamida 6 ta belgi bo‘lishi kerak");
        }

        this.fullname = fullname;
        this.phonenumber = phonenumber;
        this.password = password;
    }
}

module.exports = { RegisterDTO };
