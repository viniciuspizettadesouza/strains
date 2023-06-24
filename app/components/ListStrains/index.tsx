import CardStrains from "../CardStrains";

export default function ListStrains() {
  const strain = {
    id: "cG9zdDo0NzgwMw==",
    title: "A-Dub",
    uri: "/cannabis-strains/a-dub/",
    date: "2022-11-10T17:09:51",
    modified: "2023-05-22T03:23:32",
    featuredImage: {
      node: {
        altText: "closeup of marijuana nug",
        title: "marijuana-bud-general",
        id: "cG9zdDo0Mzc4Ng==",
        sourceUrl:
          "https://admin.leafwell.com/app/uploads/2022/09/marijuana-bud-general.jpg",
        srcSet:
          "https://b2628119.smushcdn.com/2628119/app/uploads/2022/09/marijuana-bud-general-400x400.jpg?lossy=1&strip=1&webp=1 400w, https://b2628119.smushcdn.com/2628119/app/uploads/2022/09/marijuana-bud-general-700x700.jpg?lossy=1&strip=1&webp=1 700w, https://b2628119.smushcdn.com/2628119/app/uploads/2022/09/marijuana-bud-general-768x768.jpg?lossy=1&strip=1&webp=1 768w, https://b2628119.smushcdn.com/2628119/app/uploads/2022/09/marijuana-bud-general-1024x1024.jpg?lossy=1&strip=1&webp=1 1024w, https://b2628119.smushcdn.com/2628119/app/uploads/2022/09/marijuana-bud-general.jpg?lossy=1&strip=1&webp=1 1080w",
        mediaDetails: {
          width: 1080,
          height: 1080,
          __typename: "MediaDetails",
        },
        __typename: "MediaItem",
      },
      __typename: "NodeWithFeaturedImageToMediaItemConnectionEdge",
    },
    strainTypes: {
      nodes: [
        {
          name: "Hybrid",
          slug: "hybrid",
          __typename: "StrainType",
        },
      ],
      __typename: "StrainToStrainTypeConnection",
    },
    details: {
      cannabinoids: [
        {
          abbreviation: "CBD",
          quantityStart: 1,
          quantityEnd: 1,
          __typename: "Strain_Straindetails_cannabinoids",
        },
        {
          abbreviation: "CBN",
          quantityStart: 0.1,
          quantityEnd: 0.1,
          __typename: "Strain_Straindetails_cannabinoids",
        },
      ],
      thc: {
        quantityStart: 27,
        quantityEnd: 32,
        __typename: "Strain_Straindetails_Thc",
      },
      __typename: "Strain_Straindetails",
    },
    __typename: "Strain",
  };

  return (
    <section className="bg-zinc-100 w-full">
        <div>
          <ul className="flex justify-center gap-5">
            <li className="opacity-30 text-neutral-950 text-[19px] font-normal leading-loose">
              Prev
            </li>
            <li className="text-neutral-950 text-[19px] font-normal leading-loose">
              1
            </li>
            <li className="opacity-30 text-neutral-950 text-[19px] font-normal leading-loose">
              2
            </li>
            <li className="opacity-30 text-neutral-950 text-[19px] font-normal leading-loose">
              3
            </li>
            <li className="text-neutral-950 text-[19px] font-normal leading-loose">
              Next
            </li>
          </ul>
        </div>
        <div className="w-full px-5 grid gap-y-10 mx-auto py-10 max-w-screen-2xl sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <CardStrains strain={strain} />
          <CardStrains strain={strain} />
        </div>
    </section>
  );
}
