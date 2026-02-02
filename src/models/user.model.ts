import mongoose from 'mongoose';

export interface IUser extends mongoose.Document {
  name: string;
  email: string;
  password: string;
  active: boolean;
  responsibility: 'gerente' | 'chef' | 'waiter';
  phone:string
}

const userSchema = new mongoose.Schema<IUser>({
  name: { type: String, required: true ,unique: true },
  email: { type: String, unique: true },
  phone:{type:String,unique:true, required:true},
  password: { type: String, required: true },
  active: {type: Boolean,default: true},
  responsibility: {type: String, enum: ['gerente', 'chef', 'waiter'],default: 'gerente',required: true,},
});

export const User = mongoose.model<IUser>('User', userSchema);