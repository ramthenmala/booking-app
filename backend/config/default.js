"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = require("crypto");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { publicKey, privateKey } = (0, crypto_1.generateKeyPairSync)('rsa', {
    modulusLength: 2048,
});
exports.default = {
    apiVersion: 'v1',
    port: 4001,
    dbUri: process.env.MONGODB_CONNECTION_STRING,
    saltWorkFactor: 10,
    accessTokenTtl: '1d',
    maxAge: 24 * 60 * 60 * 1000,
    publicKey: publicKey.export({ type: 'spki', format: 'pem' }),
    privateKey: privateKey.export({ type: 'pkcs8', format: 'pem' }),
};
