import { UserCard } from "@/components/user-card";
import { UserFrom } from "@/components/user-from";
import { getUsers } from "@/service/user-todo";
import Image from "next/image";

export default async function Home() {
  const data = await getUsers();
  return (
    <div className="continer">
      <div className="flex justify-center  mt-[20px]">
        <UserFrom />
      </div>
      <div className=" mt-[30px] gap-y-[15px] gap-x-[15px] mr-auto ml-auto grid grid-cols-3 mb-[50px]">
        {data?.users?.map((item) => (
          <UserCard
            id={item._id}
            key={item._id}
            name={item.name}
            age={item.age}
            addres={item.address}
            email={item.email}
          />
        ))}
      </div>
    </div>
  );
}
