import { useForm } from "react-hook-form";
import { TodoContextPr } from "../context/todo_contex";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";

export const Form = ({ defaultValue, name }) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: defaultValue?.title,
      startTime: defaultValue?.startTime,
      endTime: defaultValue?.endTime,
    },
  });

  const { dispatch } = useContext(TodoContextPr);
  const navigate = useNavigate();

  const submit = (data) => {
    if (!defaultValue) {
      dispatch({
        type: "addtask",
        value: {
          ...data,
          id: nanoid(),
        },
      });
    } else {
      dispatch({ type: "editTask", value: { ...data, id: defaultValue?.id } });
    }
    navigate("/");
  };
  return (
    <form
      className="flex flex-col items-center justify-center"
      onSubmit={handleSubmit(submit)}
    >
      <h2 className="text-[40px] font-extrabold bg-gradient-to-r from-[#c0f] via-[#5756ff] to-[#07fdfd] bg-clip-text text-transparent mb-[25px]">
        {name}
      </h2>
      <input
        type="text"
        className="w-[587px] py-[16px] px-[20px] rounded-[12px] shadow-[0px_5px_20px_rgba(0,0,0,0.25)] focus:outline-none bg-[white]"
        placeholder="Add Task ..."
        {...register("title", {
          required: true,
          minLength: { value: 3, message: " Eroor mn lenght 3 " },
        })}
      />
      {errors.title && (
        <p className="text-[12px] text-red-500">{errors.title.message}</p>
      )}
      <div className="flex mt-[25px] gap-8 justify-center items-center">
        <div className="flex gap-3.5 items-center flex-col">
          <label
            htmlFor="startTime"
            className="font-medium text-[white] text-[18px]"
          >
            Start Time:
          </label>
          <input
            type="time"
            {...register("startTime", { required: true })}
            id="startTime"
            className="py-2 px-4 border border-gray-300 rounded-lg shadow-md   transition-all duration-300 text-[white]"
          />
        </div>

        <div className="flex flex-col gap-3.5 items-center justify-center">
          <label
            htmlFor="endTime"
            className="font-medium text-[white]  text-[18px]"
          >
            End Time:
          </label>
          <input
            type="time"
            id="endTime"
            {...register("endTime", { required: true })}
            className="py-2 px-4 border border-gray-300 rounded-lg shadow-md  transition-all duration-300 text-[white]"
          />
        </div>
      </div>
      <button className="mt-7 border px-[50px] py-[10px] rounded-[14px] bg-gradient-to-r from-[#c0f] via-[#5756ff] to-[#07fdfd] text-center font-semibold text-[18px] text-[white]">
        Save
      </button>
    </form>
  );
};
