// connection with the mongodb database is established
const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        await mongoose.connect('mongodb+srv://manas:manas123@cluster0.dr3sdbx.mongodb.net/user_app',{
            useNewUrlParser: true,
            useUnifiedTopology: true,

        });
        console.log("MongoDB connected");
    }catch(err){
        console.error('Could not connect to mongoDB',err);
        process.exit(1);
    }
};

module.exports = connectDB;