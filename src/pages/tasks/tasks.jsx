import React from "react";
import { TodoContextPr } from "../../context/todo_contex";
import { Card } from "./components/card";
import NotFound from "../../assets/notfound.png";

export const Tasks = () => {
  const { data, dispatch } = React.useContext(TodoContextPr);
  return (
    <div className="">
      <h2 className="text-[40px] font-extrabold bg-gradient-to-r from-[#c0f] via-[#5756ff] to-[#07fdfd] bg-clip-text text-transparent mb-[25px]">
        TASKS
      </h2>
      {data?.todolist?.length ? (
        <ul className=" grid grid-cols-3 gap-y-[25px] gap-x-[35px]">
          {data?.todolist?.map((item) => (
            <li
              key={item.id}
              className=" px-[20px] py-[20px] w-[350px] flex flex-col items-center shadow-[0px_5px_20px_rgba(5,0,5,0.30)] "
            >
              <Card
                id={item.id}
                title={item.title}
                startTime={item.startTime}
                endTime={item.endTime}
              />
            </li>
          ))}
        </ul>
      ) : (
        <div className=" ml-[380px] mt-[70px]">
          <img
            src={NotFound}
            alt=""
            className=" w-[400px] h-[400px] opacity-12"
          />
        </div>
      )}
    </div>
  );
};
