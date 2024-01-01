import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './App.css';
import RootLayout from './components/RootLayout';
import Login from './components/Login'
import Home from './components/Home';
import Followers from './components/followers/Followers'
import Following from './components/following/Following'
import Navigationbar from './components/navigationbar/Navigationbar'
import CodePlatforms from './components/codplatforms/Codplatforms'
import ProffesionalDetails from './components/proff/Proff'
import Personal from './components/personal/Personal'
import Register from './components/Register';


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
        },
        {
          path:'/register',
          element:<Register/>
        },
        {
          path:"/followers",
          element:<Followers/>
        },
        {
          path:"/following",
          element:<Following/>
        },
        {
          path:'codingPlatforms',
          element:<CodePlatforms/>
          },
        {
          path:'professionalDetails',
          element:<ProffesionalDetails/>
        },
        {
          path:'personalDetails',
          element:<Personal/>
        },
        
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
