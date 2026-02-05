import express from "express";
import cors from "cors";
import routes from "./routes.js";
import dotenv from "dotenv";
import path from 'path';
import { connectDB } from "./database/mongodb.js";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
app.use(express.static(path.join(process.cwd(), "public")));
app.get('/', (_req, res) => {
    res.status(200).send('Welcome to Oubchef backend!');
});
app.use(async (err, _req, res, _next) => {
    await connectDB();
    console.error(err.stack);
    res.status(500).json({ status: 'error', message: err.message || 'Erro interno do servidor' });
});
export default app;
//# sourceMappingURL=index.js.map