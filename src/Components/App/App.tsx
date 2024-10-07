import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthLayout from "../Shared/AuthLayout/AuthLayout";
import MasterLayout from "../Shared/MasterLayout/MasterLayout";
import SignIn from "../SignIn/SignIn";
import UserData from "../UserData/UserData";
import UserList from "../UserList/UserList";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Home from "../Home/Home";
import Profile from "../Profile/Profile";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <AuthLayout />,
      children: [
        { index: true, element: <SignIn /> },
        { path: "/sginin", element: <SignIn /> },
      ],
    },
    {
      path: "home",
      element: <MasterLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "userList", element: <UserList /> },
        { path: "userData", element: <UserData /> },
        { path: "profile", element: <Profile /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routes} />
      <ToastContainer />
    </>
  );
}

export default App;
