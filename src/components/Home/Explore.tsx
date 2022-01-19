import { Link } from "react-router-dom";
import { ROUTES } from "../../routes/routes";

const Explore = () => {
  return (
    <section className=" px-6 md:pt-[106px] xl:pt-0 mt-6 text-center xl:text-left xl:flex h-full xl:items-end xl:justify-between xl:mx-[96px] xl:mb-[131px]">
      <div className="font-barlow w-full mx-auto xl:mx-0 max-w-md text-sec-500">
        <p className="uppercase xl:text-[28px]">So, you want to travel to</p>
        <h1 className="font-belle text-white text-[100px] md:text-[150px] mb-6">
          SPACE
        </h1>
        <p className="font-barlow xl:text-lg">
          Let's face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we'll give you a truly out of this world
          experience.
        </p>
      </div>
      <div>
        <Link className="exploreLink" to={`${ROUTES.destination}/Moon`}>
          <span className="explore">Explore</span>
        </Link>
      </div>
    </section>
  );
};

export default Explore;
