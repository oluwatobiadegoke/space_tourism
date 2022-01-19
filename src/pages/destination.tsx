import { useState, useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";

import Navigator from "../components/Navs/Navigator";
import data from "../utils/data.json";
import { DataType, DestinationProps } from "../interface";
import Nav from "../components/Destination/Nav";

const Destination = () => {
  const { id } = useParams();
  const [destination, setDestination] = useState<DestinationProps | undefined>(
    undefined
  );
  const [locations, setLocations] = useState<string[]>([]);
  const [info] = useState<DataType>(data);

  useEffect(() => {
    const destinationInfo = info.destinations.filter(
      (destination) => destination.name === id
    );
    setDestination(destinationInfo[0]);
  }, [id, info.destinations]);

  useEffect(() => {
    let locations: string[] = [];
    info.destinations.forEach((destination) => {
      locations.push(destination.name);
    });
    setLocations(locations);
  }, [info]);

  return (
    <main className="pageMain bg-destbgmobile md:bg-destbgtablet xl:bg-destbgdesktop">
      <Navigator />
      <div className="px-6 xl:mx-[103px]">
        <h4 className="pageHeader">
          <span className="mr-[18px] text-sec-500">01</span>
          <span>PICK YOUR DESTINATION</span>
        </h4>
        <div className=" xl:grid xl:grid-cols-2">
          <div>
            <img
              src={destination?.images.webp}
              alt={destination?.name}
              className="w-[170px] h-[170px] md:w-[300px] md:h-[300px] xl:w-[445px] xl:h-[445px] mx-auto xl:mx-0"
            />
          </div>
          <div>
            <Nav locations={locations} />
            <Outlet />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Destination;
