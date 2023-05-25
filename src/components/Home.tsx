import Button from "@mui/material/Button";
import React from "react";
import { Link } from "react-router-dom";
import Image from '../assets/test.png'

const Home = () => {
  return (
    <div className="flex flex-col lg:flex-row flex-1">
      <div className="flex lg:flex-1 items-center justify-center">
        <div className="flex-1 bg-blue-500 z-1 h-full rounded-lg"></div>
        <img src={Image} className="w-[100%] md:w-[60%] lg:w-full z-2" />
      </div>
      <div className="flex-1 justify-center items-center flex flex-col gap-20">
        <Link to={"/Pets"}>
          <Button className="w-64 h-24 bg-blue-500" variant="contained" size="large">
            Quero adotar um Pet
          </Button>
        </Link>
        <Link to={"/Anunciar"}>
          <Button className="w-64 h-24" variant="outlined" size="large">
            Quero anunciar um Pet
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;