import React, { useState, useEffect } from "react";

import { listPopular } from "../../components/media/api-media.js";

import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import "./home.scss";
import List from "../../components/list/List";

export default function Home() {
  const [media, setMedia] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    listPopular(signal).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setMedia(data);
      }
    });
    return function cleanup() {
      abortController.abort();
    };
  }, []);
  return (
    <div className="home">
      <Navbar />
      <Featured media={media} />
      <List media={media} />
      <List media={media} />
      <List media={media} />
      <List media={media} />
    </div>
  );
}
