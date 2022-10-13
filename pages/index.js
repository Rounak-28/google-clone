import Head from "next/head";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";

export default function Home() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  const inputRef = useRef();

  const handleSearchClick = () => {
    setQuery(inputRef.current.value);
  };

  const handleCloseClick = () => {
    inputRef.current.value = "";
  };

  inputRef?.current?.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      handleSearchClick();
    }
  });

  // useEffect(() => {
  //     fetch('http://localhost:3000/api/data')    // fetching data from local data.js file
  //       .then(response => response.json())
  //       .then(response => setData(response))
  //       .catch(err => console.error(err));
  //   }, [query])

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "63ef303e31msh70aad86368543f4p1f7121jsn6512b8a9f9e0",
      "X-RapidAPI-Host": "real-time-web-search.p.rapidapi.com",
    },
  };
  useEffect(() => {
    fetch(
      `https://real-time-web-search.p.rapidapi.com/search?q=${query}&limit=100`,
      options
    )
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((err) => console.error(err));
  }, [query]);

  return (
    <div className="dark:bg-[#202124]">
      <Navbar
        handleSearchClick={handleSearchClick}
        inputRef={inputRef}
        handleCloseClick={handleCloseClick}
      />
      <div className="w-[100vw] flex justify-center my-5">
        <div className="grid grid-cols-2 gap-5 mx-auto">
          {data?.data?.map((item) => {
            return <Card {...item} key={item.position} />;
          })}
        </div>
      </div>
    </div>
  );
}
