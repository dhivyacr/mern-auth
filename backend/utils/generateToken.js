import jwt from 'jsonwebtoken';

const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });

res.cookie('jwt', token, {
  httpOnly: true,
  secure: false,        // ✅ LOCALHOST must be false
  sameSite: 'Lax',      // ✅ LOCALHOST must be Lax
  expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
});


};

export default generateToken;
