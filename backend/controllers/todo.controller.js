import { Todo } from "../models/todo.model.js";


export const createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;

    // applying check
    if (!title || !description) {
      return res.status(403).json({
        success: false,
        message: "all fields are required",
      });
    }

    const todo = new Todo({ title, description });
    todo.save();

    return res.status(201).json({
      success: true,
      message: "todo created",
      todo,
    });
  } catch (error) {
    console.log(error);
  }
};


// getting all todos...
export const getAllTodos= async(req,res)=>{
  try {
    const todos= await Todo.find();
     console.log(todos);

     return res.status(200).json({
      success:true,
      todos
     })
    
  } catch (error) {
    console.log(error)
    
  }
}

// now if you want to update the todos.....
export const updateTodo = async(req,res)=>{
  try {

    const todoId= req.params.todoId;
    const {title} = req.body;
    console.log(title);

    // const todo= await Todo.findById(todoId)

    const todo = await Todo.findByIdAndUpdate(todoId,{title},{new:true});
    await todo.save();

    return res.status(200).json({
      success:true,
      todo
    })
    
  } catch (error) {
    
  }
}
 
// now if you want to delete the todo...
export const deleteTodo = async(req,res)=>{
  try {
      const todoId= req.params.id.todoId;
      await Todo.findByIdAndDelete(todoId);
      return res.status(200).json({
        success:true,
        message:"todo deleted successfullyy"
      })
  } catch (error) {
    console.log(error);
    
  }
}