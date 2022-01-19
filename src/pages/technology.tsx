import { useState, useEffect } from "react";

import data from "../utils/data.json";
import Navigator from "../components/Navs/Navigator";
import { TechProps } from "../interface";

const Technology = () => {
  const [techs] = useState<TechProps[]>(data.technology);
  const [techId, setTechId] = useState<string>(techs[0].name);
  const [tech, setTech] = useState<TechProps>(techs[0]);

  useEffect(() => {
    let technologies: TechProps[] = [];
    technologies = techs.filter((member) => member.name === techId);
    setTech(technologies[0]);
  }, [techId, techs]);

  return (
    <main className="pageMain bg-techbgmobile md:bg-techbgtablet xl:bg-techbgdesktop">
      <Navigator />
      <div className="mb-[104px] md:mb-0 xl:pl-6 xl:ml-[103px]">
        <h4 className="pageHeader md:pl-6 xl:pl-0 xl:mb-0">
          <span className="mr-[18px] text-sec-500">03</span>
          <span>SPACE LAUNCH 101</span>
        </h4>
        <div className="xl:flex flex-row-reverse">
          <div className="flex-1 xl:flex justify-end">
            <img
              src={tech?.images.landscape}
              alt={tech?.name}
              className="w-full h-auto xl:hidden"
            />
            <img
              src={tech?.images.portrait}
              alt={tech?.name}
              className="w-[515px] h-[527px] hidden xl:block"
            />
          </div>
          <div className="flex-1 xl:flex items-center">
            {techs.map((tech) => {
              return (
                tech.name === techId && (
                  <>
                    <div className="flex xl:flex-col items-center justify-center gap-4 xl:gap-8 mt-[34px] mb-[26px] xl:mt-0 xl:mb-0">
                      {techs.map((tech, index) => (
                        <div
                          className={`w-10 h-10 md:w-[60px] md:h-[60px] rounded-full flex items-center justify-center cursor-pointer border border-sec-500 hover:border-white text-sec-500 font-belle ${
                            tech.name !== techId && "hover:text-white"
                          } ${tech.name === techId && "bg-white text-pri-500"}`}
                          onClick={() => setTechId(tech.name)}
                        >
                          <span className="md:text-2xl">{index + 1}</span>
                        </div>
                      ))}
                    </div>
                    <div className="max-w-[458px] xl:max-w-[470px] mx-auto w-full text-center xl:text-left mb-[97px] xl:mb-0">
                      <p className="font-barlow text-sec-500">
                        THE TERMINOLOGY...
                      </p>
                      <p className="mt-[9px] xl:mt-6 mb-8 font-belle text-white text-2xl md:text-[40px] xl:text-[56px] uppercase">
                        {tech.name}
                      </p>
                      <p className="font-barlow text-sec-500 xl:text-lg">
                        {tech.description}
                      </p>
                    </div>
                  </>
                )
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Technology;
