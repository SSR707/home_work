"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const path = pathname.split("/").pop();

  return (
    <section className="pt-[48px] pb-[50px]">
      <div className="container">
        <div className="flex gap-[50px]">
          <div className=" shadow-md rounded-[6px] h-[355px]">
            <div className="pt-[59px] pb-[20px] px-[20px] flex flex-col">
              <Link
                href={"/profile/orders"}
                className={`pl-[10px] py-[16px] pr-[110px] border-l-4  ${
                  path === "orders"
                    ? "border-[var(--primary)]"
                    : "border-transparent"
                }
                font-bold text-[15px] leading-[129%] text-[var(--text-title)]
                `}
              >
                Sizning buyurtmaliringiz
              </Link>
              <Link
                href={"/profile/help"}
                className={`pl-[10px] py-[16px] pr-[110px] border-l-4  ${
                  path === "help"
                    ? "border-[var(--primary)]"
                    : "border-transparent"
                }
                   font-bold text-[15px] leading-[129%] text-[var(--text-title)]`}
              >
                Yordam kerakmi ?
              </Link>
            </div>

            <div className=" pb-[59px] pt-[20px] px-[20px] flex flex-col bg-[var(--bg)]">
              <Link
                href={"/profile/account"}
                className={`pl-[10px] py-[16px] pr-[110px] border-l-4  ${
                  path === "account"
                    ? "border-[var(--primary)]"
                    : "border-transparent"
                }
                   font-bold text-[15px] leading-[129%] text-[var(--text-title)]`}
              >
                Akkaunt
              </Link>
              <Link
                href={"/profile/logout"}
                className={`pl-[10px] py-[16px] pr-[110px] border-l-4  ${
                  path === "logout"
                    ? "border-[var(--primary)]"
                    : "border-transparent"
                }
                   font-bold text-[15px] leading-[129%] text-[var(--text-title)]`}
              >
                Chiqish
              </Link>
            </div>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </section>
  );
};

export default ProfileLayout;
