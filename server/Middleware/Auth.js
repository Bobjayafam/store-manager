import jwt from 'jsonwebtoken';

class Auth {
  static generateToken(payload, res) {
    jwt.sign(payload, process.env.TOKEN_SECRET, { expiresIn: '1d' }, (error, token) => {
      if (error) {
        res.status(401).json({
          success: false,
          message: 'Unable to login',
        });
      } else {
        res.status(200).json({
          success: true,
          token,
        });
      }
    });
  }

  static verifyToken(req, res, next) {
    const token = req.headers['api-access-token'];
    if (!token) {
      res.status(400).json({
        success: false,
        message: 'Authorization token not found',
      });
    } else {
      jwt.verify(token, process.env.TOKEN_SECRET, (error, decoded) => {
        if (error) {
          res.status(400).json({
            message: 'Invalid token',
          });
        } else {
          req.decoded = decoded;
          return next();
        }
      });
    }
  }

  static isLoggedInAsAdmin(req, res, next) {
    const token = req.headers['api-access-token'];
    if (!token) {
      res.status(400).json({
        message: 'You are unauthorized for this operation',
      });
    } else {
      jwt.verify(token, process.env.TOKEN_SECRET, (error, decoded) => {
        if (error) {
          res.json({
            message: 'Invalid Token',
          });
        } else {
          req.decoded = decoded;
        }
        if (decoded.role !== 'admin') {
          res.status(400).json({
            message: 'You are unauthorized for this operation',
          });
        }
        return next();
      });
    }
  }
}

export default Auth;
