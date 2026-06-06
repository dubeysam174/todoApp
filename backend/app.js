import express from 'express'
import dotenv from 'dotenv'
import connectDB from './db/db.js';
import userRouter from './routes/user.route.js'
import todoRouter from './routes/todo.route.js'
import bodyParser
 from 'body-parser';


// importing this so we can use credentials throughout express app without exposing them...
dotenv.config()





// making the instance so we can use express...
const app=express();
const port= process.env.PORT || 3000

// calling connecting with mongodb for further process
connectDB()
// importing express inbuilt middlewares to fetch data...
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}));



// making routes here....
app.use('/api/v1/user',userRouter)
app.use('/api/v1/todo',todoRouter)





app.listen(port,()=>{
    console.log(`server started at http://localhost:${port}`)
})