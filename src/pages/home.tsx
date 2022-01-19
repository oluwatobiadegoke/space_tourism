import Explore from "../components/Home/Explore";
import Navigator from "../components/Navs/Navigator";

const Home = () => {
  return (
    <main className="pageMain bg-homebgmobile md:bg-homebgtablet xl:bg-homebgdesktop">
      <Navigator />
      <Explore />
    </main>
  );
};

export default Home;
