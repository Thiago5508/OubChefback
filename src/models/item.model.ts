import mongoose from "mongoose";

export interface IItem extends mongoose.Document {
  user: mongoose.Types.ObjectId;
  order: mongoose.Types.ObjectId;
  price: number;
  quantity: number;
  active: boolean;
  products: mongoose.Types.ObjectId[];
  size: mongoose.Types.ObjectId;
  ingredients?: mongoose.Types.ObjectId[];
}

const itemSchema = new mongoose.Schema<IItem>(
  {
    user: {type: mongoose.Schema.Types.ObjectId,ref: "User",required: true,},
    order: {type: mongoose.Schema.Types.ObjectId,ref: "Order",required: true,},
    price: {type: Number,required: true,},
    quantity: {type: Number,default: 1,},
    active: {type: Boolean,default: true,},
    products: [{type: mongoose.Schema.Types.ObjectId,ref: "Product",required: true}],
    ingredients: [{type: mongoose.Schema.Types.ObjectId, ref: "Ingredient"}],
    size: {type: mongoose.Schema.Types.ObjectId,ref: "Size",required: true }}
    ,
  { timestamps: true }
);

export const Item = mongoose.model<IItem>("Item", itemSchema);
