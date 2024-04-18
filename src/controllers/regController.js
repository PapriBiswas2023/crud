import bcrypt from 'bcryptjs';

import User from '../models/User.js';

export const register = async (req, res) => {
    const { username, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
        username,
        password: hashedPassword
    });

    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
};

