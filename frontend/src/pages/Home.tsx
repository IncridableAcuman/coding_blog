import { useNavigate } from "react-router-dom";
import Landing from "./Landing"
import { useEffect } from "react";

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if(!localStorage.getItem("accessToken")){
      navigate("/login");
    }
  }, [navigate]);
  return (
    <>
    <div className="">
      <Landing/>
    </div>
    </>
  )
}

export default Home