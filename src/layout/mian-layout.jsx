import { TodoCard } from "../components/todo-card/todo_card";
import React from "react";
import { request } from "../config/request";

const getUser = (setData) => {
  request.get("/users").then((res) => {
    console.log(res.data);
    setData(res.data.users);
  });
};

export function MainLayout() {
  const [data, setData] = React.useState([]);
  const [input, setInput] = React.useState("");
  const submit = (e) => {
    e.preventDefault();
    if (input) {
      request.post("/users", { title: input }).then((res) => {
        getUser(setData);
      });
      setInput("");
    }
  };
  React.useEffect(() => getUser(setData), []);
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
                  getUser={getUser}
                  key={item._id}
                  title={item.title}
                  setData={setData}
                  id={item._id}
                />
              ))}
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
