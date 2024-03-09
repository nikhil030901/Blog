import React from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../../store/authSlice";
import authService from "../../appwrite/config";
function LogoutBtn() {
  const dispatch = useDispatch();
  const logouthandler = () => {
    authService.logout().then(() => {
      dispatch(logOut());
    });
  };
  return (
    <button className="inline-block px-6 py-2 duration-200 hover:bg-blue-400 rounded-full">
      Logout
    </button>
  );
}

export default LogoutBtn;
