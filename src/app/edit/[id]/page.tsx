"use client";
import { BackBtn } from "@/components/back-btn";
import { UserFrom } from "@/components/user-from";
import { getUsersById, IUser } from "@/service/user-todo";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const UsersEdit = () => {
  const { id }: { id: string } = useParams();
  const [userData, setUserData] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchUser = async () => {
      try {
        const data = await getUsersById(id);
        console.log(data);
        setUserData(data?.data);
      } catch (error) {
        console.error("Foydalanuvchini yuklashda xatolik:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id, loading]);
  if (loading) return <p>Loading...</p>;
  return (
    <div className="container">
      <div className=" mt-[30px] ml-[30px]">
        <BackBtn />
      </div>
      <div className="flex justify-center  mt-[20px]">
        <UserFrom
          id={id}
          text="User Edit"
          name={userData?.name}
          age={userData?.age}
          email={userData?.email}
          address={userData?.address}
        />
      </div>
    </div>
  );
};

export default UsersEdit;
