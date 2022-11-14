import mongoose from 'mongoose';

mongoose.connect(process.env.URI_MONGODB)
.then(() => console.log("MongoDb conectado"))
.catch(err => console.log("Error de conexión a MongoDb", err))