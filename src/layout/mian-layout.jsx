import { TodoCard } from "../components/todo-card/todo_card";
import React from "react";

export function MainLayout() {
  const [data, setData] = React.useState([]);
  const [input, setInput] = React.useState("");
  const submit = (e) => {
    e.preventDefault();
    if (input) {
      setData([...data, { id: data.length + 1, title: input }]);
      setInput("");
    }
  };
  return (
    <>
      <main>
        <section className="pt-[50px]">
          <div className="container">
            <div className=" bg-[#fff] text-center py-[15px] rounded-2xl shadow-2xl  md:max-w-[550px] mx-auto">
              <h2 className="  font-bold text-[25px] mb-[15px] md:text-[28px]">
                Task
              </h2>
              <form className=" flex justify-center gap-2.5" onSubmit={submit}>
                <input
                  placeholder="Task add..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  name="title"
                  type="text"
                  className=" border-2 border-[#e1e1e1] py-[8px] rounded-[10px] focus:outline-blue-400 px-2 md:w-[400px] md:gap-3"
                />
                <button className=" py-[8px] px-[14px] rounded-[10px] text-[16px] text-[#FFF] bg-[#40c237] hover:bg-green-400">
                  Add
                </button>
              </form>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <ul className="flex flex-col items-center pt-[25px]">
              {data.map((item) => (
                <TodoCard
                  key={item.id}
                  title={item.title}
                  setData={setData}
                  id={item.id}
                />
              ))}
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
