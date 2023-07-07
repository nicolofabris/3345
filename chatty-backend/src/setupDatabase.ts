import mongoose from "mongoose";

export default () => {
  const connect = () => {
    mongoose
      .connect("mongodb://localhost:27017/chattyapp-backend")
      .then(() => {
        console.log("successfully connected to db");
      })
      .catch((error) => {
        console.log("error connecting to db");
        return process.exit(1)
      });
  };
  connect();

  mongoose.connection.on('disconnected', connect)
};
