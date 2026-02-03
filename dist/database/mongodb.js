import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) {
    throw new Error('❌ MONGO_URI não definido');
}
// garante tipagem correta
const globalWithMongoose = global;
if (!globalWithMongoose.mongoose) {
    globalWithMongoose.mongoose = {
        conn: null,
        promise: null,
    };
}
export async function connectDB() {
    if (globalWithMongoose.mongoose.conn) {
        return globalWithMongoose.mongoose.conn;
    }
    if (!globalWithMongoose.mongoose.promise) {
        globalWithMongoose.mongoose.promise =
            mongoose.connect(MONGO_URI);
    }
    globalWithMongoose.mongoose.conn =
        await globalWithMongoose.mongoose.promise;
    console.log('✅ MongoDB conectado');
    return globalWithMongoose.mongoose.conn;
}
//# sourceMappingURL=mongodb.js.map