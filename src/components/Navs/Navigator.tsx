import { useState } from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/shared/logo.svg";
import { ReactComponent as Open } from "../../assets/shared/icon-hamburger.svg";
import { ReactComponent as Close } from "../../assets/shared/icon-close.svg";
import { ROUTES } from "../../routes/routes";
import Mobile from "./Mobile";
import LGScreen from "./LGScreen";

const Navigator = () => {
  const [navOpen, setNavOpen] = useState<boolean>(false);

  return (
    <nav className="relative flex justify-between items-center p-6 md:pt-0 xl:pt-6 md:pr-0">
      <Link to={ROUTES.home} className="xl:mx-4">
        <Logo />
      </Link>
      <div className="hidden h-24 xl:block flex-1 relative">
        <div className="h-[1px] bg-pri-400 w-full absolute top-[47.5px] left-6 z-10"></div>
      </div>
      <div
        onClick={() => setNavOpen(!navOpen)}
        className="cursor-pointer md:hidden"
      >
        {!navOpen ? <Open /> : <Close className="relative z-20" />}
      </div>
      <LGScreen />
      <Mobile navOpen={navOpen} />
    </nav>
  );
};

export default Navigator;
