import mongoose from "mongoose";

export const connectToDB = () => {
  mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@sales-cluster.z2l1u.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
  );

  const dbConnection = mongoose.connection;
  dbConnection.on("error", (err) => console.log(`Connection error: ${err}`));
  dbConnection.once("open", () => console.log("Connected to DB!"));
};
