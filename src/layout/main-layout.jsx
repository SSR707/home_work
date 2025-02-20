import { Link, Outlet, useLocation } from "react-router-dom";
import { RiAddLine } from "react-icons/ri";
import { FaTasks } from "react-icons/fa";
import BgImg from "../assets/bg-img.svg";
export const MainLayout = () => {
  const locastion = useLocation();
  const AddTask = locastion.pathname === "/addtask";
  const Task = locastion.pathname === "/";

  return (
    <div className="flex ">
      <div className=" w-[15%] h-screen  shadow-[7px_-1px_12px_0_rgba(0,0,0,0.15)] bg-[#b995ee]">
        <div className="flex flex-col px-[5px] py-[30px] gap-[8px]">
          <Link
            to="addtask"
            className={`flex  items-center justify-center py-[10px] shadow-[0px_5px_20px_rgba(0,0,0,0.20)] rounded-[14px] font-semibold text-[18px] gap-1.5 hover:bg-blue-400 ${
              AddTask ? "bg-blue-600" : "bg-[#aaa]"
            }`}
          >
            <RiAddLine className="text-[22px]" />
            Add Task
          </Link>
          <Link
            to="/"
            className={` flex  items-center justify-center py-[10px] shadow-[0px_5px_20px_rgba(0,0,0,0.20)] rounded-[14px] font-semibold text-[18px] gap-2 hover:bg-blue-400 ${
              Task ? "bg-blue-600" : "bg-[#aaa]"
            }`}
          >
            <FaTasks />
            Tasks
          </Link>
        </div>
      </div>
      <div
        className="w-[85%] h-screen flex bg-cover bg-center bg-no-repeat py-[20px] px-[50px]"
        style={{ backgroundImage: `url(${BgImg})` }}
      >
        <Outlet />
      </div>
    </div>
  );
};
