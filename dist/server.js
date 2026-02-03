import app from '@/index';
const PORT = process.env.PORT || 3333;
async function startServer() {
    try {
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