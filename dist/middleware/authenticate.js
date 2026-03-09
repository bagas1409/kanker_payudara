"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = authenticate;
const jwt_1 = require("../utils/jwt");
async function authenticate(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader?.startsWith('Bearer ')) {
        res.status(401).json({ status: 'error', message: 'No token provided' });
        return;
    }
    const token = authHeader.split(' ')[1];
    try {
        const payload = (0, jwt_1.verifyToken)(token);
        req.doctorId = payload.doctorId;
        next();
    }
    catch {
        res.status(401).json({ status: 'error', message: 'Invalid or expired token' });
    }
}
//# sourceMappingURL=authenticate.js.map