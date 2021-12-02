import mongoose from "mongoose";

// This connects our app to MongoDB
export function connect() {
    // Add mongoose connection event to follow what is happening with the connection
 

    // Destructure DB variables from environment variables
    const { dbpassword } = process.env;
    
    //const connectionString = `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}`;
    const connectionString = `mongodb+srv://finalproject:${dbpassword}@ronnie.qfioj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

    // username : finalproject
    // password : FinalProject21

    

    console.log(connectionString);
    return mongoose.connect(connectionString,{ useNewUrlParser: true ,useUnifiedTopology: true });
    
}


