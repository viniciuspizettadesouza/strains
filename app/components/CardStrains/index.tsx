import Image from "next/image";
import StrainInterface from "@/app/interfaces/strain.interface";

const CardStrains: React.FC<StrainInterface> = ({ strain }) => {
  return (
    <div className="w-80 h-80 bg-white rounded-2xl">
      <div className="p-10">
        <div className="px-2.5 py-1 bg-zinc-100 rounded-lg justify-center items-center gap-2.5 inline-flex">
          <div className="text-center text-neutral-950 text-2.5 font-normal leading-3">
            {strain.strainTypes.nodes[0].name}
          </div>
        </div>

        <Image
          width={20}
          height={20}
          className="w-40 h-40 mx-auto"
          src={strain.featuredImage.node.sourceUrl}
          alt="strain"
        />

        <div className="text-neutral-950 text-[19px] font-normal leading-loose">
          {strain.title}
        </div>
        <div className="text-neutral-950 text-[14px] font-normal leading-relaxed">
          {strain.details.thc.quantityStart}.{strain.details.thc.quantityEnd}%
          THC and {strain.details.cannabinoids[0].quantityStart}.
          {strain.details.cannabinoids[0].quantityEnd}% CBD
        </div>
      </div>
    </div>
  );
};

export default CardStrains;
