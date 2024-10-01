import { generateKeyPairSync } from 'crypto';
import dotenv from 'dotenv';
dotenv.config();

const { publicKey, privateKey } = generateKeyPairSync('rsa', {
    modulusLength: 2048,
});

export default {
    apiVersion: 'v1',
    port: 4001,
    dbUri: process.env.MONGODB_CONNECTION_STRING as string,
    saltWorkFactor: 10,
    accessTokenTtl: '1d',
    maxAge: 24 * 60 * 60 * 1000,
    publicKey: publicKey.export({ type: 'spki', format: 'pem' }),
    privateKey: privateKey.export({ type: 'pkcs8', format: 'pem' }),
};