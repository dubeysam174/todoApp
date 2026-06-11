import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import axios from "axios";
import { toast } from "sonner";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // adding login handler here we are connecting with backend..
  const changeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const loginHandler = async () => {
    try {
         const res= await axios.post("http://localhost:8000/api/v1/user/login",user,{
            headers:{"Content-Type": "application/json"},
            withCredentials: true,

         })
         console.log(res);
         if(res.success){
            toast.success(res.data.message)
         }
    } catch (error) {
          
    }
  };
  return (
    <div>
      <Input
        value={user.email}
        name='email'
        onChange={changeHandler}
        type="text"
        placeholder="Email"
      />
      <Input
        value={user.password}
        name='password'
        onChange={changeHandler}
        type="password"
        placeholder="Pasword"
      />
      <Button onClick={loginHandler}>LogIn</Button>
    </div>
  );
};

export default Login;
