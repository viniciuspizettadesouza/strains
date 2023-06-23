import React from "react";

export default function FilterStrains() {
  const buttons = ["All", "Indica", "Sativa", "Hybrid"];
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  return (
    <section className="w-full px-5 grid gap-y-10 mx-auto max-w-screen-2xl">
      <p className="text-neutral-950 text-[14px] font-normal leading-relaxed">
        A - Z Strains
      </p>
      <div>
        {alphabet.map((letter, index) => (
          <button
            key={index}
            className={`mr-3 bg-white rounded-[40px] border border-indigo-300 justify-center items-center inline-flex`}
          >
            <span className="flex flex-col justify-center w-[38px] h-[36px] text-neutral-950 text-[19px] font-normal">
              {letter}
            </span>
          </button>
        ))}
      </div>

      <div className="w-[359px] h-[46px] relative">
        {buttons.map((label, index) => (
          <div
            key={index}
            className={`w-[${
              index === 0 ? 65 : index === 1 ? 86 : index === 2 ? 87 : 91
            }px] h-[46px] px-6 py-[10px] left-[${index * 96}px] top-[0px] bg-${
              index === 0 ? "violet" : "white"
            }-300 rounded-lg border border border border border-indigo-300 justify-center items-center gap-[10px] inline-flex`}
          >
            <div className="text-neutral-950 text-[14px] font-normal leading-relaxed">
              {label}
            </div>
          </div>
        ))}

        <button className="text-neutral-950 text-[14px] font-normal underline leading-relaxed">
          Clear selection
        </button>
      </div>
    </section>
  );
}
