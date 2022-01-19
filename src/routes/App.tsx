import { Route, Routes } from "react-router-dom";

import Crew from "../pages/crew";
import Destination from "../pages/destination";
import DestinationInfo from "../pages/DestinationInfo";
import Home from "../pages/home";
import Technology from "../pages/technology";
import { ROUTES } from "./routes";

const App = () => {
  return (
    <Routes>
      <Route path={ROUTES.home} element={<Home />} />
      <Route path={ROUTES.crew} element={<Crew />} />
      <Route path={ROUTES.destination} element={<Destination />}>
        <Route path=":id" element={<DestinationInfo />} />
      </Route>
      <Route path={ROUTES.technology} element={<Technology />} />
    </Routes>
  );
};

export default App;
