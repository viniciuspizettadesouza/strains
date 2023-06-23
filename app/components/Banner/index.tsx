import React from "react";

export default function Banner() {
  return (
    <section className="w-full px-5 grid gap-y-10 mx-auto py-10 max-w-3xl text-center">
      <h1 className="text-center text-neutral-950 text-[40px] font-normal leading-10">
        Cannabis Strain Directory
      </h1>

      <article className="text-center text-neutral-950 text-[14px] font-normal leading-relaxed">
        <p>
          A marijuana strain is a classification that determines a plant’s
          chemotype (chemical profile), phenotype (physical appearance), and
          potential medical effects. Cannabis strains are sometimes referred to
          as cultivars, chemovars, chemotypes, or varieties. Strains come in
          different flavors, aromas, and levels of potency. From a botanical
          standpoint, marijuana strains are the ancestors of specific cannabis
          plants. The lineage of a marijuana strain lends insight into the
          strain’s unique effects and benefits.
        </p>
      </article>
    </section>
  );
}
