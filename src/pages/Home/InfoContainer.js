import React from "react";
import Row from "react-bootstrap/Row";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../components/Loading";
import InfoCard from "../../components/InfoCard";
function InfoCotainer() {
  const { data: infomation = [], isLoading } = useQuery({
    queryKey: ["infomation"],
    queryFn: async () => {
      const res = await fetch("https://api.tvmaze.com/search/shows?q=all");
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <Row xs={1} md={2} lg={3} className="g-4">
      {infomation.map((info) => (
        <InfoCard key={info.show.id} info={info}></InfoCard>
      ))}
    </Row>
  );
}

export default InfoCotainer;
