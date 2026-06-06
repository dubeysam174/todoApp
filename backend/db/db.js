import mongoose from 'mongoose'


const connectDB=async()=>{
    try {
       const connectionInstance= await mongoose.connect(process.env.MONGO_URI)
       console.log('mongoDb connected')
    } catch (error) {
        console.log('error occured',error)
    }
}

export default connectDB