// import { useState, useEffect } from "react";
import { CrewProps } from "../../interface";

interface Props {
  crew: CrewProps[];
  crewId: string;
  setCrewId: (crewId: string) => void;
}

const CrewNav = ({ crew, crewId, setCrewId }: Props) => {
  return (
    <div className="flex justify-center xl:justify-start gap-4 my-8 md:my-10 xl:mt-[120px] xl:mb-[94px]">
      {crew.map((member) => {
        return (
          <div
            key={member.name}
            className="w-[10px] h-[10px] rounded-full bg-sec-800 cursor-pointer"
            onClick={() => setCrewId(member.name)}
          >
            {member.name === crewId && (
              <div className="w-full h-full rounded-full bg-white"></div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CrewNav;
