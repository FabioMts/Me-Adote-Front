import Button from "@mui/material/Button";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="botoes">
      <Link to={"/Pets"}>
        <Button variant="contained" size="large">
          Quero adotar um Pet
        </Button>
      </Link>
<Link to={"/Anunciar"}>
      <Button variant="outlined" size="large">
        Quero anunciar um Pet
      </Button>
</Link>
    </div>
  );
};

export default Home;
