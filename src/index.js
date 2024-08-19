import dotenv from 'dotenv'
import connectDB from "./db/index.js"

dotenv.config({
    path:'./.env'
})
/* 
// function connectDB(){}
const app = epress();
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB.URI}/${DB_NAME}`);
    app.on("error", () => {
      console.log("ERRR....DB NOT CONNECTED");
      throw error
    });
    app.listen(process.env.PORT,()=>{
        console.log(`App is listening on ${process.env.PORT}`)
    })
  } catch (error) {
    console.log(error);
    throw error;
  }
})();
*/
connectDB();