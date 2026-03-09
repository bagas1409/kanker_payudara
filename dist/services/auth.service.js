"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = register;
exports.login = login;
const bcrypt_1 = __importDefault(require("bcrypt"));
const database_1 = __importDefault(require("../config/database"));
const jwt_1 = require("../utils/jwt");
const AppError_1 = require("../utils/AppError");
const SALT_ROUNDS = 10;
async function register(dto) {
    const existing = await database_1.default.doctor.findUnique({
        where: { email: dto.email },
    });
    if (existing) {
        throw new AppError_1.AppError(409, 'Email already registered');
    }
    const hashedPassword = await bcrypt_1.default.hash(dto.password, SALT_ROUNDS);
    const doctor = await database_1.default.doctor.create({
        data: {
            name: dto.name,
            email: dto.email,
            password: hashedPassword,
        },
        select: {
            id: true,
            name: true,
            email: true,
            role: true,
            createdAt: true,
        },
    });
    return doctor;
}
async function login(dto) {
    const doctor = await database_1.default.doctor.findUnique({
        where: { email: dto.email },
    });
    if (!doctor) {
        throw new AppError_1.AppError(401, 'Invalid email or password');
    }
    const isPasswordValid = await bcrypt_1.default.compare(dto.password, doctor.password);
    if (!isPasswordValid) {
        throw new AppError_1.AppError(401, 'Invalid email or password');
    }
    const token = (0, jwt_1.signToken)({ doctorId: doctor.id, role: doctor.role });
    return {
        token,
        doctor: {
            id: doctor.id,
            name: doctor.name,
            email: doctor.email,
            role: doctor.role,
        },
    };
}
//# sourceMappingURL=auth.service.js.map