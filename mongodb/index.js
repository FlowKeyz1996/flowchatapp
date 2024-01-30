import mongoose from "mongoose";

let isConnected = false;

export const connectToDb = async () => {
    mongoose.set ('strictQuery', true);
    if (isConnected) {
        console.log ("MongoDb is already connected")
        return;
    }
    try {
        await mongoose.connect(process.env.MONGODB_URL,{
            dbName:"flowChat",
            UseNewUrlParser: true,
            uneUnifiedTopology:true,
    
        })
        isConnected = true;
        console.log("mongodb is connected succesfully");

    }
    catch(error){
        console.log(error);
    }
};


