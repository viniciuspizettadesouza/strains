"use client";

import React from "react";
import { getClient } from "../../lib/getClient";
import { useQuery } from "@apollo/client";
import { buttons, Alphabet, StrainQuery } from "@/app/lib/constants";

export default function FilterStrains() {
  const client = getClient();
  const { loading, data } = useQuery(StrainQuery, { client });
  if (loading) {
    return <p>Loading</p>;
  }

  return (
    <section className="mx-auto grid w-full max-w-screen-2xl gap-y-10 px-5">
      <div>API response: {JSON.stringify(data)}</div>

      <p className="text-[14px] font-normal leading-relaxed text-neutral-950">
        A - Z Strains
      </p>
      <div>
        {Object.values(Alphabet).map((letter, index) => (
          <button
            key={index}
            className={`mr-3 inline-flex items-center justify-center rounded-[40px] border border-indigo-300 bg-white`}
          >
            <span className="flex h-[36px] w-[38px] flex-col justify-center text-[19px] font-normal text-neutral-950">
              {letter}
            </span>
          </button>
        ))}
      </div>

      <div>
        {buttons.map((label, index) => (
          <div
            key={index}
            className={`w-[${
              index === 0 ? 65 : index === 1 ? 86 : index === 2 ? 87 : 91
            }px] h-[46px] px-6 py-[10px] left-[${index * 96}px] top-[0px] bg-${
              index === 0 ? "violet" : "white"
            }-300 inline-flex items-center justify-center gap-[10px] rounded-lg border border border border border-indigo-300`}
          >
            <div className="text-[14px] font-normal leading-relaxed text-neutral-950">
              {label}
            </div>
          </div>
        ))}

        <button className="text-[14px] font-normal leading-relaxed text-neutral-950 underline">
          Clear selection
        </button>
      </div>
    </section>
  );
}
