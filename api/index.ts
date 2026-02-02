import { app } from '../src/app';
import { connectDB } from '../src/database/mongodb';

export default async function handler(req, res) {
  await connectDB();
  return app(req, res);
}