import express from 'express';
import dotenv from 'dotenv';
import './Models/db.js'
import './Models/TaskModel.js'
import './Routes/TaskRouter.js'
import TaskRouter from './Routes/TaskRouter.js'
import bodyParser from 'body-parser';

// Load environment variables from .env file
dotenv.config();

const PORT = process.env.PORT || 8080;

const app = express();

app.use(bodyParser.json())
app.use('/tasks',TaskRouter)

app.get('/', (req, res) => {
    res.send('hello');
});

app.listen(PORT, () => {
    console.log(`Server running on port= ${PORT}`);
});
