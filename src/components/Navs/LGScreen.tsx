import { NavLink } from "react-router-dom";
import { navLinks } from "../../utils/navLinks";

const LGScreen = () => {
  return (
    <span className="lgScreenNav">
      {navLinks.map((link) => {
        const { id, name, to } = link;
        return (
          <NavLink
            key={id}
            to={to}
            className="font-barlow h-full flex items-center group hover:border-b-[3px] hover:border-sec-500"
          >
            <span className="text-white mr-2 font-bold  transition duration-500">
              {id}
            </span>
            <span className="text-sec-500 uppercase  transition duration-500">
              {name}
            </span>
          </NavLink>
        );
      })}
    </span>
  );
};

export default LGScreen;
