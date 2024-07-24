import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://rohitmajalatti05:rohit123@cluster0.8fgmgke.mongodb.net/food-del').then(()=>console.log("DB connected"));
}