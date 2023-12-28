import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './App.css';
import RootLayout from './components/RootLayout';
import Login from './components/Login'
import Home from './components/Home';


function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<RootLayout/>,
      children :[
        {
          path:"/",
          element:<Home/>
        },
        {
          path: "/login",
          element : <Login/>
        }
      ]
    }
  ])
  return (
    <div className='app'>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
