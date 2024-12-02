import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "MERN_JOB_SEEKING_WEBSITE",
    })
    .then(() => {
      console.log("Connected to database.");
    })
    .catch((err) => {
      console.log(`Some Error occured. ${err}`);
    });
};

// MONGO_URI = mongodb+srv://ayushichaurasia2002:<gYD39V03FVwSpWF8>@cluster0.amdhlkg.mongodb.net/?retryWrites=true
// gYD39V03FVwSpWF8, shubhi 
