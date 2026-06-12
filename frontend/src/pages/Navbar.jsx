import { Button } from '@/components/ui/button'
import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

const Navbar = () => {
  const navigate= useNavigate();
  const logoutHander=async()=>{
     try {
         const res = await axios.get("http://localhost:8000/api/v1/user/logout");
         if(res.data.success){
          toast(res.data.message)
          navigate("/login")
         }
     } catch (error) {
  toast.error(error.response?.data?.message);
}

  }
  return (
<div className="bg-gray-600">
  <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
    <h1>Todo App</h1>
    <Button onClick={logoutHander}>Logout</Button>
  </div>
</div>
  )
}

export default Navbar
