"use client";

import { StrainContext } from "../contexts/strain.context";
import React, { useContext, useState } from "react";
import { useQuery } from "@apollo/client";
import { getClient } from "../lib/getClient";
import { Alphabet, SearchStrainByInitial } from "@/app/lib/constants";

export default function InitialFilter() {
  const { state, setValue } = useContext(StrainContext);
  const [initial, setInitital] = useState("");

  const client = getClient();
  const { loading, error, data } = useQuery(SearchStrainByInitial, {
    fetchPolicy: "no-cache",
    variables: {
      titleStartsWith: initial,
    },
    client,
    onCompleted: (data) => {
      setValue(data);
    },
  });

  console.log(data);

  const handleOptionChange = (event) => {
    setInitital(event.target.innerHTML);
  };

  return (
    <div>
      <p className="mb-1 text-xs leading-relaxed text-neutral-950">
        A - Z Strains
      </p>
      {Object.values(Alphabet).map((letter, index) => (
        <button
          key={index}
          className={`mr-3 inline-flex items-center justify-center rounded-full border border-violet-300 bg-white`}
          onClick={handleOptionChange}
          value={letter}
        >
          <span className="flex h-8 w-8 flex-col justify-center text-lg text-neutral-950">
            {letter}
          </span>
        </button>
      ))}
    </div>
  );
}
