import mongoose from "mongoose";

const connnectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("Database connected");
  });
  await mongoose.connect(`${process.env.MONGODB_URI}/sp_ecommerce`);
};

export default connnectDB;
