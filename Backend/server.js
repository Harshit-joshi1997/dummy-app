import express from 'express';
import parser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.listen(PORT, ( req,res) => {
   console.log(`Server is running on port ${PORT}`);
})

