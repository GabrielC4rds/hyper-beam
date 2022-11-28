import React from "react";
import Header from "src/components/Header.js/header";
import Comments from "src/components/Comments";
import Footer from "src/components/Footer/footer";
import Plats from "src/components/Plats";
import Podcast from "src/components/Podcast";

export default function Post() {
  return (
    <>
      <Podcast />
      <Plats />
      <Comments />
    </>
  );
}
