import "./index.css";
import { Button } from "./components/ui/button";
import Navbar from "./pages/Navbar";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

function App() {
   const [title , setTitle] = useState("")
   const [description,setDescription]= useState("")


   // making function for add todo ....
   const addTodoHandler=async()=>{
    try {
         const res= await axios.post("http://localhost:8000/api/v1/todo",{title},{headers:{
          'Content-Type': 'application/json'},
          withCredentials: true,
        })
        if(res.success){
           toast.success(res.data.message);
        }
    } catch (error) {
       toast.error(error.res.data.message) 
    }
   }
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />

      <div className="flex justify-center mt-10">
        <div className="w-full max-w-lg space-y-4">
          <Input
            value={title} 
            onChange={(e)=>setTitle(e.target.value)}
            type="text"
            placeholder="Add a new todo"
            className="w-full"
            />

          <Textarea
            value={description} 
            onChange={(e)=>setDescription(e.target.value)}
            placeholder="Enter description..."
            className="w-full min-h-32"
          />

          <Button className="w-full">
            Add Todo
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;