import { MdDelete, MdModeEditOutline } from "react-icons/md";

export const TodoCard = ({ title, setData, id }) => {
  const deleteItem = () => {
    setData((pState) => {
      return pState.filter((item) => item.id !== id);
    });
  };
  const editItem = () => {
    const newValue = prompt("New Data", title);
    setData((pState) => {
      return pState.map((item) =>
        item.id === id ? { id, title: newValue || title } : item
      );
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
