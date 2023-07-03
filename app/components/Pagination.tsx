"use client";

import { useContext } from "react";
import CardStrains from "./CardStrains";
import { StrainContext } from "../contexts/strain.context";
import { ContentNode } from "../interfaces/strains.interface copy";

const Pagination = ({ totalPages }) => {
  return (
    <section className="w-full bg-zinc-100">
      <ul className="flex justify-center gap-5">
        <li className="text-lg leading-loose text-neutral-950 opacity-30">
          Prev
        </li>
        <li className="text-lg leading-loose text-neutral-950">1</li>
        {totalPages > 2 && (
          <>
            <li className="text-lg leading-loose text-neutral-950">2</li>
            <li className="text-lg leading-loose text-neutral-950 opacity-30">
              ...
            </li>
            <li className="text-lg leading-loose text-neutral-950">
              {totalPages}
            </li>
          </>
        )}
        <li className="text-lg leading-loose text-neutral-950">Next</li>
      </ul>
    </section>
  );
};

export default Pagination;
