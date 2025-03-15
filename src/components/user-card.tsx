import React from "react";
import { DaleteUser } from "./dalete-user";
import { EditUsers } from "./edit-users";
interface IUser {
  name: string;
  age: number;
  addres: string;
  email: string;
  id: string;
}

export const UserCard = ({ name, age, addres, email, id }: IUser) => {
  return (
    <div className=" py-[20px] px-[30px]  rounded-[24px] shadow-md">
      <div className="flex flex-col gap-[15px]">
        {" "}
        <h3 className="text-[18px] text-[#263a5b] font-bold "> name: {name}</h3>
        <h3 className="text-[18px] text-[#263a5b] font-bold"> age: {age}</h3>
        <h3 className="text-[18px] text-[#263a5b] font-bold ">
          {" "}
          addres: {addres}
        </h3>
        <h3 className="text-[18px] text-[#263a5b] font-bold">
          {" "}
          email: {email}
        </h3>
      </div>
      <div className="flex justify-between mt-[20px]">
        <EditUsers id={id} />
        <DaleteUser id={id} />
      </div>{" "}
    </div>
  );
};
