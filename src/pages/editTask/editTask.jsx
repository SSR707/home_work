import { Link, useParams } from "react-router-dom";
import { Form } from "../../components/form";
import { IoMdArrowRoundBack } from "react-icons/io";
import React from "react";
import { TodoContextPr } from "../../context/todo_contex";

export const EditTasks = () => {
  const { id } = useParams();
  const { data, dispatch } = React.useContext(TodoContextPr);
  const todo = data.todolist.find((item) => item.id === id);
  return (
    <>
      <Link to="/" className="w-[50px] h-[40px] text-[35px]">
        <IoMdArrowRoundBack />
      </Link>

      <div className="mt-[100px] ml-auto mr-auto">
        <Form name={"Edit Tasks"} defaultValue={todo} />
      </div>
    </>
  );
};
