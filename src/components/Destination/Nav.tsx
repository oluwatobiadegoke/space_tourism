import { NavLink } from "react-router-dom";

interface Props {
  locations: string[];
}

const Nav = ({ locations }: Props) => {
  return (
    <nav className="flex items-center justify-center xl:justify-start gap-[26px] xl:gap-[36px] mt-[26px] md:mt-[53px] xl:mt-0">
      {locations.map((location, index) => (
        <NavLink
          key={location}
          to={`${locations[index]}`}
          className="h-[34px] flex items-center hover:border-b-[3px] hover:border-sec-500"
        >
          <span className="uppercase font-barlow text-sec-500">{location}</span>
        </NavLink>
      ))}
    </nav>
  );
};

export default Nav;
