import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import data from "../utils/data.json";
import { DataType, DestinationProps } from "../interface";

const DestinationInfo = () => {
  const { id } = useParams();
  const [destination, setDestination] = useState<DestinationProps | undefined>(
    undefined
  );
  const [info] = useState<DataType>(data);

  useEffect(() => {
    const destinationInfo = info.destinations.filter(
      (destination) => destination.name === id
    );
    setDestination(destinationInfo[0]);
  }, [id, info.destinations]);
  return (
    <section className="text-center xl:text-left mt-8 mb-[58px] max-w-[573px]  mx-auto xl:mx-0 w-full">
      <h1 className="font-belle uppercase text-white text-[56px] md:text-[80px] xl:text-[100px]">
        {destination?.name}
      </h1>
      <p className="font-barlow text-sec-100 xl:text-lg">
        {destination?.description}
      </p>
      <div className="w-full h-[1px] bg-[#383B4B] my-8 md:mt-[49px]"></div>
      <div className="flex flex-col md:flex-row md:justify-evenly xl:justify-start gap-8 xl:gap-20">
        <div>
          <p className="text-sm text-sec-500 mb-3">AVG. DISTANCE</p>
          <p className="font-belle text-white text-[28px] uppercase">
            {destination?.distance}
          </p>
        </div>
        <div>
          <p className="text-sm text-sec-500 mb-3">EST. TRAVEL TIME</p>
          <p className="font-belle text-white text-[28px] uppercase">
            {destination?.travel}
          </p>
        </div>
      </div>
    </section>
  );
};

export default DestinationInfo;
