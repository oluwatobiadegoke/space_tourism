import { Routes } from "../interface";
import { ROUTES } from "../routes/routes";

export const navLinks: Routes[] = [
  {
    id: "00",
    name: "Home",
    to: ROUTES.home,
  },
  {
    id: "01",
    name: "Destination",
    to: `${ROUTES.destination}/Moon`,
  },
  {
    id: "02",
    name: "Crew",
    to: ROUTES.crew,
  },
  {
    id: "03",
    name: "Technology",
    to: ROUTES.technology,
  },
];
