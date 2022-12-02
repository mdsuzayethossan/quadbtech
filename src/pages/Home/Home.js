import React from "react";
import AppBar from "../../components/Navbar";
import Container from "react-bootstrap/Container";
import InfoCotainer from "./InfoContainer";

const Home = () => {
  return (
    <>
      <Container className="mt-5">
        <InfoCotainer></InfoCotainer>
      </Container>
    </>
  );
};

export default Home;
