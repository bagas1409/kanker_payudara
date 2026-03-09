"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = errorHandler;
const AppError_1 = require("../utils/AppError");
function errorHandler(err, req, res, 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
next) {
    if (err instanceof AppError_1.AppError) {
        res.status(err.statusCode).json({
            status: 'error',
            message: err.message,
        });
        return;
    }
    // Log unexpected errors
    console.error('[Unhandled Error]', err);
    res.status(500).json({
        status: 'error',
        message: 'Internal server error',
    });
}
//# sourceMappingURL=errorHandler.js.map