import app from '@/app';
import { connectDB } from '@/database/mongodb';
import dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT || 3333;
async function startServer() {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`🚀 Server running on port ${PORT}`);
        });
    }
    catch (error) {
        console.error('❌ Falha Crítica ao Iniciar o Servidor:', error);
    }
}
startServer();
//# sourceMappingURL=server.js.map