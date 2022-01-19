import { Link } from "react-router-dom";
import { navLinks } from "../../utils/navLinks";

interface Props {
  navOpen: boolean;
}

const Mobile = ({ navOpen }: Props) => {
  return (
    <div className={`mobileNav ${!navOpen ? "-right-full" : "right-0"}`}>
      {navLinks.map((link) => {
        const { id, name, to } = link;
        return (
          <Link to={to} key={id}>
            <span className="text-white mr-4">{id}</span>
            <span className="text-sec-500 uppercase">{name}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default Mobile;
