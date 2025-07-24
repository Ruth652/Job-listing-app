import React from "react";
import { useNavigate } from "react-router-dom";

interface propsType {
  photo: string;
  Title: string;
  subtitle: string;
  description: string;
  fields: string[];
  ind: number;
}

const Job = ({
  photo,
  Title,
  subtitle,
  description,
  fields,
  ind,
}: propsType) => {
  const colorMap = [
    "bg-[#EEFAF7] text-[#56CDAD] border border-[#EEFAF7]",
    "bg-white text-[#FFB836] border border-[#FFB836]",
    "bg-white text-[#2D298E] border border-[#2D298E]",
  ];
  const Navigate = useNavigate();
  const handlenewp = () => {
    Navigate("/job/" + ind);
  };
  return (
    <div
      className=" hover:bg-blue-200 border-[0.3px] rounded-3xl m-2 flex  flex-row   p-5 pl-7 gap-2 mb-5"
      onClick={handlenewp}
    >
      <div className="grid h-full basis-1/8  justify-center">
        <div>
          <img src={photo} alt="job${ind}" className=" h-10 object-contain" />
        </div>
      </div>

      <div className="basis-7/8">
        <div className="font-semibold text-2xl">{Title}</div>
        <div className="font-[300]">{subtitle}</div>
        <div>{description}</div>
        <div className="flex gap-2 mt-4">
          {fields.map((c, ind) => (
            <p
              key={ind}
              className={
                colorMap[ind % 3] + " rounded-xl p-2 text-sm font-medium"
              }
            >
              {c}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Job;
