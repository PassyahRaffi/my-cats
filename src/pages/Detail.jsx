import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function Detail() {
  const [detail, setDetail] = useState([]);
  const params = useParams();
  // const numbers = [1, 2, 3, 4, 5];

  function getDetail() {
    let url = `https://api.thecatapi.com/v1/breeds/${params.id}`;
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
        // console.log(data) // di sini tinggal olah data yang untuk menjelaskan detail cat
        setDetail(data);
      });
  }
  // console.log(detail);

  useEffect(() => {
    getDetail();
  }, []);

  return (
    <>
      {/* <pre>{JSON.stringify(detail, null, 1)}</pre> */}
      <main className="bg-gradient-to-r w-full max-h-screen from-gray-600 to-black">
        <div key={detail.id} className="flex justify-evenly py-20 mx-20">
          <div className="max-w-full rounded overflow-hidden shadow-lg bg-gray-400">
            <img className="w-full" src={detail.cfa_url} alt="" />
              <div className="px-6 py-4 font-bold text-7xl mb-2">{detail.name}</div>
            {/* <div className="px-6 py-4">
              <p className="text-gray-700 text-xl">Wight body</p>
              <p className="text-gray-700 text-xl">{detail.weight.imperial}</p>
              <p className="text-gray-700 text-xl">{detail.weight.metric}</p>
            </div> */}
            <div className="px-6 py-4">
              <p className="text-gray-700 text-xl">Life span</p>
              <p className="text-gray-700 text-xl">{detail.life_span}</p>
            </div>
            <div className="px-6 py-4">
              <p className="text-gray-700 text-xl">Temperament</p>
              <p className="text-gray-700 text-xl">{detail.temperament}</p>
            </div>
            <div className="px-6 py-4">
              <p className="text-gray-700 text-xl">Description</p>
              <p className="text-gray-700 text-xl">{detail.description}</p>
            </div>
            <div className="px-6 pt-8 pb-2">
              <span className="inline-block bg-gray-200 rounded-full hover:bg-gray-300 hover:text-blue-500 px-3 py-1 text-sm font-bold text-gray-700 mr-2 mb-2">
                WIKIPEDIA
              </span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
