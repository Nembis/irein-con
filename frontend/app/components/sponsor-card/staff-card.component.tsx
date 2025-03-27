import { TStaff } from "@/app/constants/sponsors.constant";
import Image from "next/image";
import { FC } from "react";
import { H3 } from "../headers/h3.component";

interface SponsorCardProps {
  staff: TStaff;
}

export const StaffCard: FC<SponsorCardProps> = ({ staff: sponsor }) => {
  return (
    <div className="border-2 border-primary-red rounded-lg bg-primary-blue p-4 space-y-8 shadow-md shadow-black">
      <div className="w-full relative pb-[75%]">
        <Image
          src={sponsor.image}
          alt={`Sponsor ${sponsor.name} picture`}
          width={0}
          height={0}
          sizes="100%"
          className="w-full h-auto bg-cover"
          fill={true}
        />
      </div>

      {/* <div className="w-full relative h-72 md:h-64 lg:h-[540px] 2xl:h-[740px]">
        <Image
          src={sponsor.image}
          alt={`Sponsor ${sponsor.name} picture`}
          width={0}
          height={0}
          sizes="100%"
          className="w-full h-auto bg-cover"
          fill={true}
        />
      </div> */}

      <div className="w-full text-center">
        <H3 className="text-primary-red">{sponsor.name}</H3>
        <p>{sponsor.role}</p>
      </div>
    </div>
  );
};
