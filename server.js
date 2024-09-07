const express = require('express');

const connectDB = require('./config/db');
const suppliesRoutes = require('./routes/supplies');

const app = express();


//middlewares
app.use(express.json());


app.use((req,res,next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

//conect to mongodb
connectDB();


//routes
app.use('/supplies',suppliesRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT ,() => {
    console.log(`Server running on port ${PORT}`);
});
