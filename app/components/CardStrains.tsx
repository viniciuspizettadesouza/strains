import Image from "next/image";
import StrainInterface from "@/app/interfaces/strain.interface";
import Link from "next/link";

const CardStrains: React.FC<StrainInterface> = ({ strain }) => {
  return (
    <Link href={`${strain.uri}`}>
      <div className="h-80 w-80 rounded-2xl bg-white">
        <div className="p-10">
          <div className="inline-flex items-center justify-center gap-2.5 rounded-lg bg-zinc-100 px-2.5 py-1">
            <div className="text-2.5 text-center font-normal leading-3 text-neutral-950">
              {strain.strainTypes.nodes[0].name}
            </div>
          </div>

          <Image
            width={200}
            height={200}
            className="mx-auto h-40 w-40"
            src="https://admin.leafwell.com/app/uploads/2022/09/marijuana-bud-general.jpg"
            alt="strain"
          />

          <div className="text-[19px] font-normal leading-loose text-neutral-950">
            {strain.title}
          </div>
          <div className="text-[14px] font-normal leading-relaxed text-neutral-950">
            {strain.details.thc.quantityStart}.{strain.details.thc.quantityEnd}%
            THC and {strain.details.cannabinoids[0].quantityStart}.
            {strain.details.cannabinoids[0].quantityEnd}% CBD
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardStrains;
