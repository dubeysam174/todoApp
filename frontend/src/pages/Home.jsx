import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import Navbar from "./Navbar";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Home = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState([]);

  // Fetch all todos
  const fetchTodos = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8000/api/v1/todo",
        {
          withCredentials: true,
        }
      );

      if (res.data.success) {
        setTodos(res.data.todos);
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to fetch todos"
      );
    }
  };

  // Add Todo
  const addTodoHandler = async () => {
    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/todo",
        {
          title,
          description,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (res.data.success) {
        toast.success(res.data.message);
         setTodos([...todos,res.data.todo])
        setTitle("");
        setDescription("");

        fetchTodos();
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to add todo"
      );
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />

      <div className="max-w-4xl mx-auto p-6">
        {/* Add Todo Form */}
        <div className="space-y-4 mb-10">
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Enter todo title"
          />

          <Textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter description"
          />

          <Button onClick={addTodoHandler}>
            Add Todo
          </Button>
        </div>

        {/* Todo List */}
        <div className="grid gap-4">
          {todos.length > 0 ? (
            todos.map((todo) => (
              <Card
                key={todo._id}
                className="p-4 bg-slate-800 border-slate-700"
              >
                <h2 className="text-lg font-semibold text-white">
                  {todo.title}
                </h2>

                <p className="text-slate-300 mt-2">
                  {todo.description}
                </p>
              </Card>
            ))
          ) : (
            <p className="text-white text-center">
              No Todos Found
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;