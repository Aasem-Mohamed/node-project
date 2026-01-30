import express from 'express';
import usersRoutes from './routes/users.routes';
import postsRoutes from './routes/posts.routes';
import mongoose from 'mongoose';
import errorHandler from './middlewares/errorHandler';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());

// routes
app.use("/api/v1/users", usersRoutes);
app.use("/api/v1/posts", postsRoutes);


app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
  mongoose.connect(`${process.env.MONGO_URI}/${process.env.DB_NAME}`).then(() => {
    console.log('✅✅ Connected to MongoDB');
  }).catch((err) => {
    console.log('❌❌ Connected to MongoDB');
    console.log(err);
  });
});