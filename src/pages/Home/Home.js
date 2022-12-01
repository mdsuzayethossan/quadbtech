import { useQuery } from "@tanstack/react-query";
import React from "react";
import AppBar from "../../components/Navbar";
import InfoCard from "./InfoContainer";
import Container from "react-bootstrap/Container";

const Home = () => {
  const { data: sellers = [], isLoading } = useQuery({
    queryKey: ["sellers"],
    queryFn: async () => {
      const res = await fetch(`https://api.tvmaze.com/search/shows?q=all`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });
  return (
    <>
      <AppBar></AppBar>
      <Container className="mt-5">
        <InfoCard></InfoCard>
      </Container>
    </>
  );
};

export default Home;
