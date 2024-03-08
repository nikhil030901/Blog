import { React, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import "./App.css";
import { login, logOut } from "./store/authSlice";
import authService from "./appwrite/auth";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData));
        } else {
          dispatch(logOut());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header />
        <main>
          ToDo: <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
