"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendSuccess = sendSuccess;
exports.sendError = sendError;
function sendSuccess(res, data, message, statusCode = 200) {
    const payload = { status: 'success', data };
    if (message)
        payload.message = message;
    return res.status(statusCode).json(payload);
}
function sendError(res, message, statusCode = 500) {
    const payload = { status: 'error', message };
    return res.status(statusCode).json(payload);
}
//# sourceMappingURL=response.js.map