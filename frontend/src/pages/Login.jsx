import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // adding login handler here we are connecting with backend..
  const changeHandler = () => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const loginHandler = async () => {};
  return (
    <div>
      <Input
        value={user.email}
        onChange={changeHandler}
        type="text"
        placeholder="Email"
      />
      <Input
        value={user.password}
        onChange={changeHandler}
        type="text"
        placeholder="Pasword"
      />
      <Button>LogIn</Button>
    </div>
  );
};

export default Login;
