import React from "react";
import { useNavigate } from "react-router-dom";
import { TodoContextPr } from "../../../context/todo_contex";

export const Card = ({ id, title, startTime, endTime }) => {
  const navigate = useNavigate();
  const { data, dispatch } = React.useContext(TodoContextPr);
  const EditData = () => {
    navigate(`/editTask/${id}`);
  };
  const deleteData = () => {
    dispatch({ type: "deleteTask", value: { id: id } });
  };
  return (
    <>
      <p className="text-center font-medium text-[16px] text-[white] w-[300px] h-[50px] break-words whitespace-normal overflow-hidden">
        {title}
      </p>
      <div className="flex justify-between mt-[20px] gap-[50px]">
        <h3 className="text-center font-medium text-[16px] text-[white]">
          Start Time: {startTime}
        </h3>
        <h3 className="text-center font-medium text-[16px] text-[white]">
          End Time: {endTime}
        </h3>
      </div>
      <div className="flex gap-2.5 mt-[25px]">
        <button
          onClick={EditData}
          className=" font-semibold text-[18px] leading-[100%] px-[50px] py-[10px]  rounded-[14px] bg-[#506afc] hover:bg-blue-300"
        >
          Edit
        </button>
        <button
          onClick={deleteData}
          className=" font-semibold text-[18px] leading-[100%] px-[40px] py-[10px]  rounded-[14px] bg-[#f5584a] hover:bg-[#ff9292]"
        >
          Delete
        </button>
      </div>
    </>
  );
};
