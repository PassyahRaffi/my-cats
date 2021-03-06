import React, { useState, useEffect } from "react";
import Walpaper from "../assets/walpaper.jpg";
import { Link, Route } from "react-router-dom";
import Detail from "./Detail";
// import TextField from "@mui/material/TextField";

export default function Home() {
  // const searchButton = document.querySelectorAll(".search-button");

  const [cats, setCats] = useState([]);
  // console.log(cats);
  // const [search, setSearch] = useState("");

  function detailCats() {
    const url = "https://api.thecatapi.com/v1/breeds";
    const data = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "17d94b92-754f-46eb-99a0-65be65b5d18f",
      },
    };
    fetch(url, data)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setCats(data);
      });
  }

  useEffect(() => {
    detailCats();
  }, []);

  return (
    <>
      <nav className="w-full bg-gradient-to-r from-gray-600 to-black pt-20">
        <h1 className="text-center text-8xl uppercase py-10 font-bold text-white">
          this is my cats
        </h1>
        <div className="flex justify-center w-full">
          <img className="w-2/5" src={Walpaper} alt="" />
        </div>
      </nav>

      <main className="bg-gradient-to-r from-gray-600 to-black">
        <div className="flex justify-center">
          <div className="mb-3 xl:w-1/3">
            <div className="input-group relative flex items-stretch w-full mb-4">
              <input
                type="search"
                className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="button-addon2"
              ></input>
              <button
                className="btn px-6 py-2.5 bg-gray-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
                type="button"
                id="button-addon2"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="search"
                  className="w-4"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-10 py-20 bg-gradient-to-r from-gray-600 to-black">
          {cats.map((prop, index) => {
            // console.log("cat index ke >", `${index} = ${prop.name}`);

            if (index < 10) {
              return (
                <div key={prop.id} className="flex justify-evenly">
                  <div
                    className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-400"
                  >
                    <img className="w-80 h-60" src={prop.image.url} alt="" />
                    <div className="px-6 py-4">
                      <div className="font-bold text-center text-xl mb-2">{prop.name}</div>
                    </div>
                    <div className="flex justify-center px-6 pt-4 pb-2">
                      <Link to={"/Detail/" + prop.id} className="bg-gray-200 hover:bg-gray-300 rounded-sm px-5 py-2 text-sm font-bold text-gray-700 mr-2 mb-2">
                        Click Detail
                      </Link>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </main>
    </>
  );
}
