"use client";

import { useContext } from "react";
import CardStrains from "./CardStrains";
import { strainExample } from "@/app/lib/constants";
import { StrainContext } from "../contexts/strain.context";
import { ContentNode } from "../interfaces/strains.interface copy";

const ListStrains: React.FC = () => {
  const { state, setValue } = useContext(StrainContext);
  const {
    contentNodes: { nodes },
  } = state;

  console.log(nodes);

  return (
    <section className="w-full bg-zinc-100">
      <ul className="flex justify-center gap-5">
        <li className="text-[19px] font-normal leading-loose text-neutral-950 opacity-30">
          Prev
        </li>
        <li className="text-[19px] font-normal leading-loose text-neutral-950">
          1
        </li>
        <li className="text-[19px] font-normal leading-loose text-neutral-950 opacity-30">
          2
        </li>
        <li className="text-[19px] font-normal leading-loose text-neutral-950 opacity-30">
          3
        </li>
        <li className="text-[19px] font-normal leading-loose text-neutral-950">
          Next
        </li>
      </ul>

      <div className="mx-auto grid w-full max-w-screen-2xl gap-6 gap-y-10 px-5 py-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {nodes.map((strain: ContentNode) => (
          <CardStrains key={strain.id} strain={strain} />
        ))}
      </div>
    </section>
  );
};

export default ListStrains;
