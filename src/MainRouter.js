import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Users from "./components/user/Users";
import Signup from "./components/user/Signup";
import Signin from "./auth/Signin";
import Profile from "./components/user/Profile";
import PrivateRoute from "./auth/PrivateRoute";
import EditProfile from "./components/user/EditProfile";
import NewMedia from "./components/media/NewMedia";
import EditMedia from "./components/media/EditMedia";
import PlayMedia from "./components/media/PlayMedia";

const MainRouter = ({ data }) => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route
          path="/user/:userId"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/user/edit/:userId"
          element={
            <PrivateRoute>
              <EditProfile />
            </PrivateRoute>
          }
        />

        <Route
          path="/media/new"
          element={
            <PrivateRoute>
              <NewMedia />
            </PrivateRoute>
          }
        />
        <Route
          path="/media/edit/:mediaId"
          element={
            <PrivateRoute>
              <EditMedia />
            </PrivateRoute>
          }
        />
        <Route path="/media/:mediaId" element={<PlayMedia data={data} />} />
      </Routes>
    </div>
  );
};

export default MainRouter;
