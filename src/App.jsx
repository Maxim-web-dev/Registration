import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { SignIn } from "./components/signIn/signIn";
import { SignUp } from "./components/signUp/signUp";
import Layout from "./Layout/Layout";
import ErrorElement from "./ErrorElement";
import StartPage from "./pages/StartPage";
import HomePage from "./pages/HomePage";
import RequireAuth from "./hoc/RequireAuth";
import { useState } from "react";
import Account from "./Layout/Account";

export default function App() {
  const [user, setUser] = useState(false)
  localStorage.setItem('user', user)

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} errorElement={<ErrorElement />}>
        <Route index element={<StartPage />}/>
        
        <Route path='home' element={
            <RequireAuth>
              <HomePage />
            </RequireAuth>
          } />

        <Route path="account" element={<Account />} >
          <Route index element={<SignIn setUser={setUser}/>} />
          <Route path='signup' element={<SignUp/>} />
        </Route>

      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
