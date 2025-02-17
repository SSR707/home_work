import { MdDelete, MdModeEditOutline } from "react-icons/md";
import { request } from "../../config/request";

export const TodoCard = ({ getUser, title, setData, id }) => {
  const deleteItem = () => {
    request.delete(`/users/${id}`).then((res) => {
      getUser(setData);
    });
  };
  const editItem = () => {
    const newValue = prompt("New Data", title);
    request.put(`/users/${id}`, { title: newValue || title }).then((res) => {
      getUser(setData);
    });
  };
  return (
    <>
      <li className=" shadow-2xl rounded-[8px] flex py-[15px] px-[20px] w-full justify-between items-center mb-[15px] bg-[#fff] md:max-w-[550px] mx-auto">
        <h3 className=" font-normal text-[16px] flex-1 overflow-hidden text-ellipsis whitespace-nowrap md:font-medium md:text-[18px] min-w-0 ">
          {title}
        </h3>
        <div className="flex gap-[px]">
          <button
            onClick={editItem}
            className="py-[8px] px-[8px]  text-[20px] md:text-[24px]  hover:text-blue-500"
          >
            <MdModeEditOutline />
          </button>
          <button
            className="py-[8px] px-[5px]  text-[20px] md:text-[24px] hover:text-red-500"
            onClick={deleteItem}
          >
            <MdDelete />
          </button>
        </div>
      </li>
    </>
  );
};
