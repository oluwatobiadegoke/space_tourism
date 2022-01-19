import { useState, useEffect } from "react";

import data from "../utils/data.json";
import { CrewProps } from "../interface";
import Navigator from "../components/Navs/Navigator";
import CrewNav from "../components/Crew/CrewNav";
import CrewInfo from "../components/Crew/CrewInfo";
import CrewImg from "../components/Crew/CrewImg";

const Crew = () => {
  const [crew] = useState<CrewProps[]>(data.crew);
  const [crewId, setCrewId] = useState<string>(crew[0].name);
  const [member, setMember] = useState<CrewProps>(crew[0]);

  useEffect(() => {
    let member: CrewProps[] = [];
    member = crew.filter(
      (member) => member.name === crewId && member.images.webp
    );
    setMember(member[0]);
  }, [crewId, crew]);

  return (
    <main className="pageMain bg-crewbgmobile md:bg-crewbgtablet xl:bg-crewbgdesktop">
      <Navigator />
      <div className="mb-[104px] md:mb-0 px-6 xl:mx-[103px]">
        <h4 className="pageHeader xl:mb-0">
          <span className="mr-[18px] text-sec-500">02</span>
          <span>MEET YOUR CREW</span>
        </h4>
        <div className="max-w-[458px] xl:max-w-none mx-auto w-full h-full">
          <div className="flex flex-col md:flex-col-reverse xl:flex-row-reverse h-full">
            <CrewImg member={member} />
            <div className="w-full h-[1px] bg-[#383B4B] md:hidden"></div>
            <div className="flex flex-col md:flex-col-reverse xl:flex-1">
              <CrewNav crew={crew} crewId={crewId} setCrewId={setCrewId} />
              <CrewInfo crew={crew} crewId={crewId} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Crew;
