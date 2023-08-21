import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

import './App.css';
import Home from './page/Home/Home.jsx';
import Profile from './page/Profile/Profile.jsx';
import Explore from './page/Explore/Explore.jsx';
import Signin from './page/Signin/Signin.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Error from './page/Error/Error';

const Layout = () => {
  return (
    <div className='md:w-8/12 mx-auto'>
      <Navbar/>
      <Outlet></Outlet>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <Error/>,
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/profile/:id',
        element: <Profile/>
      },
      {
        path: '/explore',
        element: <Explore/>,
      },
      {
        path: '/signin',
        element: <Signin/>,
      },
      {
        path: '/signout',
        element: <Signin/>,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
