import mongoose from "mongoose"

const todoSchema=new mongoose.Schema({

    
    
    title: {
        type: String,
        required: true,
        trim: true,
    },
  description: {
      type: String,
      trim: true,
    }
})


export const Todo = mongoose.model('Todo',todoSchema)