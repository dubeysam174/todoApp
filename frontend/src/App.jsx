import Home from "./pages/Home";
import Login from "./pages/Login";
import {createBrowserRouter,  RouterProvider}  from 'react-router-dom'




const appRouter= createBrowserRouter([
  {path:'/',
    element:<Login/>
  },
  {
    path:'/home',
    element:<Home/>
  }
])

function App() {
   return (
     <RouterProvider router={appRouter}/>
   );
}

export default App;