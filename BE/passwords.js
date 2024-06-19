const bcrypt = require('bcryptjs');

const generateHashedPassword = async (plainPassword) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(plainPassword, salt);
    console.log(`Plain: ${plainPassword}, Hashed: ${hashedPassword}`);
};

generateHashedPassword('password1'); // 'password1'
generateHashedPassword('password2'); // 'password2'
generateHashedPassword('password3'); // 'password3'