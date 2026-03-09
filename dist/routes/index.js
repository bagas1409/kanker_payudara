"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_routes_1 = __importDefault(require("./auth.routes"));
const patient_routes_1 = __importDefault(require("./patient.routes"));
const diagnosis_routes_1 = __importDefault(require("./diagnosis.routes"));
const router = (0, express_1.Router)();
router.use('/auth', auth_routes_1.default);
router.use('/patients', patient_routes_1.default);
router.use('/diagnosis', diagnosis_routes_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map