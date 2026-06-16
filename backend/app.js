import express from 'express'
import dotenv from 'dotenv'
import connectDB from './db/db.js';
import userRouter from './routes/user.route.js'
import todoRouter from './routes/todo.route.js'
import bodyParser
 from 'body-parser';
 import cors from 'cors'
 import {Redis} from 'ioredis'
 import axios from 'axios'



// importing this so we can use credentials throughout express app without exposing them...
dotenv.config()





// making the instance so we can use express...
const app=express();
const redisClient = new Redis()
const port= process.env.PORT || 3000

// calling connecting with mongodb for further process
connectDB()
// importing express inbuilt middlewares to fetch data...
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true,
}))

// making this for redis..
app.get('/posts',async(req,res)=>{
      try {
        const cachedData = await redisClient.get('posts');
        if(cachedData!=null){
            return res.json(JSON.parse(cachedData));

        }else{
            console.log('not cached data')
          const {data}=  await axios("https://jsonplaceholder.typicode.com/posts")
           await redisClient.setex("posts",JSON.stringify(data));

           return res.json(data)
        }
      } catch (error) {
         console.log(error);
      }
})


// making routes here....
app.use('/api/v1/user',userRouter)
app.use('/api/v1/todo',todoRouter)





app.listen(port,()=>{
    console.log(`server started at http://localhost:${port}`)
})