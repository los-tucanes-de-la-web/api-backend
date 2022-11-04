// import bcrypt from 'bcrypt'; MAC OS 10.15
import bcrypt from 'bcryptjs'; //for MAC OS 10.14 or earlier
import User from '../models/User.js';
import jwt from 'jwt-simple';
import config from '../config/index.js';

import { transporter } from '../config/mailer.js';

const register = async (req, res) => {
  const { body } = req;
  try {
    const hashedPassword = await bcrypt.hash(body.password, 10);
    body.password = hashedPassword;

    req.body.role = 'user';
    const user = await User.create(body);

    user.password = undefined;
    //TOKE TO SEND IN MAIL

    const payload = {
      userId: user.id,
    };
    const token = jwt.encode(payload, config.jwtSecret);
    const mailOptions = {
      from: 'deliasofia2310@gmail.com',
      to: user.email,
      subject: 'Nodemailer TEST',
      text: 'Verify your credentials on link below',
      html: `<h1>Email Confirmation</h1>
      <h2>Hello ${user.name}</h2>
      <a href=${config.server.url}/auth/verify/${token}> Click here</a>
      `,
    };
    const sendEmail = await transporter.sendMail(mailOptions);
    return res.json({
      msg: 'user registered',
      user,
      sendEmail,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'User registration error',
      error,
    });
  }
};

export { register };
