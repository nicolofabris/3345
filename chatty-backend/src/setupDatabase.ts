import mongoose from "mongoose";
import { config } from "./config";

export default () => {
  const connect = () => {
    mongoose
      .connect(`${config.DATABASE_URL}`)
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
