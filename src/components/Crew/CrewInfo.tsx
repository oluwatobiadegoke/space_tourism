import { CrewProps } from "../../interface";

interface Props {
  crew: CrewProps[];
  crewId: string;
}

const CrewInfo = ({ crew, crewId }: Props) => {
  return (
    <div>
      {crew.map((member) => {
        return (
          member.name === crewId && (
            <div key={member.name} className="text-center xl:text-left">
              <p className="text-sec-500 font-belle uppercase md:text-2xl xl:text-[32px]">
                {member.role}
              </p>
              <p className="mt-2 mb-[14px] xl:mt-7 xl:mb-[27px] font-belle text-2xl md:text-[40px] xl:text-[56px] text-white uppercase">
                {member.name}
              </p>
              <p className="text-sec-500 font-barlow xl:max-w-[444px] xl:text-lg">
                {member.bio}
              </p>
            </div>
          )
        );
      })}
    </div>
  );
};

export default CrewInfo;
