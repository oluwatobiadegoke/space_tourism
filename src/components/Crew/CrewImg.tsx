import { CrewProps } from "../../interface";

interface Props {
  member: CrewProps;
}

const CrewImg = ({ member }: Props) => {
  return (
    <div className="flex-1 flex items-end h-full">
      <img
        src={member.images.webp}
        alt={member.name}
        className="h-[222px] md:h-[532px] xl:h-[654px] w-auto mx-auto"
      />
    </div>
  );
};

export default CrewImg;
