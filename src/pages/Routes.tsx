import React, { Dispatch, SetStateAction } from "react";

import { Routes, Route } from "react-router-dom";
import SignUp from "./SignUp";
import HomePage from "./HomePage";
import Login from "./Login";
import ComposeMail from "./ComposeMail";
import OutBox from "./OutBox";
import Inbox from "./Inbox";

interface AllRoutesProps {
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
}

function AllRoutes(props: AllRoutesProps) {
  console.log(props.isLoggedIn);

  return (
    <div>
      {!props.isLoggedIn ? (
        <AuthRoutes setIsLoggedIn={props.setIsLoggedIn} />
      ) : (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/compose" element={<ComposeMail />} />
          <Route path="/inbox" element={<Inbox />} />
          <Route path="/outbox" element={<OutBox />} />
        </Routes>
      )}
    </div>
  );
}

function AuthRoutes(props: {
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/login"
          element={<Login setIsLoggedIn={props.setIsLoggedIn} />}
        />
        <Route
          path="/"
          element={<Login setIsLoggedIn={props.setIsLoggedIn} />}
        />
      </Routes>
    </>
  );
}

export default AllRoutes;
