import mongoose from "mongoose";
let isConnected = false;
export const connectDB = async () => {
    if (isConnected)
        return;
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 50000
        });
        isConnected = true;
        console.log("MongoDB conectado!");
    }
    catch (error) {
        console.error("Erro ao conectar no MongoDB", error);
        process.exit(1);
    }
};
//# sourceMappingURL=mongodb.js.map