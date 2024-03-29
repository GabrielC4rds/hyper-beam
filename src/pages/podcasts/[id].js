import React, { useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";
import Post from "./Post";
const envUrl = require("../../envUrl.json");

export default function Podcasts() {
  const router = useRouter();
  const parametro = router.query.id;
  const [name, setName] = useState();
  useEffect(() => {
    async function fetchUrl() {
      const url = window.location.href;
      setName(url.replace(`${envUrl.link}/podcasts/`, ""));
    }
    fetchUrl();
  }, []);

  return <>{parametro === name ? <Post /> : ""}</>;
}
