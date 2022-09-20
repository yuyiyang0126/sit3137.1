import React from "react";
import { useUserAuth } from "../context/UserAuthContext";
import { useNavigate } from "react-router";
import { Button } from "react-bootstrap";

const Home = () => {
  const { logOut, user } = useUserAuth();
  const nav = useNavigate();
  const hLogout = async () => {
    try {
      await logOut();
      nav("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  const navigateMain = () => {
    nav('/Main');
  };



  return (
    <>
      <div className="text-center">
        Welcome to Dev@Deakin Home page <br />
        {user && user.email}
      </div>

      <div className="d-grid ">
        <Button variant="dark" onClick={hLogout}>
          Log out
        </Button>
      </div>

      <div className="d-grid ">
        <Button variant="white" onClick={navigateMain}>
          Enter
        </Button>
      </div>
    <></>
    </>
  );
};

export default Home;
