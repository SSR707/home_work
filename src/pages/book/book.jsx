import {
  Link,
  Navigate,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import { BookInfo } from "./components/bookInfo";
import { book as BookData } from "../../data/data";
import { SmillerBooks } from "./components/SmillerBooks";
import { Button } from "../../components/ui/button";
import { useEffect } from "react";

export const Book = () => {
  const { id } = useParams();
  const bookExists = BookData.some((item) => item.id === +id);
  const location = useLocation();
  const isInfoPage = location.pathname === `/book/${id}`;
  const isCommentPage = location.pathname === `/book/${id}/comment`;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  if (!bookExists) {
    return <Navigate to="*" replace />;
  }
  return (
    <>
      <section className="pt-[24px]">
        <div className="container">
          <BookInfo id={id} />
        </div>
      </section>
      <section className=" pt-[40px]">
        <div className="container">
          <nav className=" flex gap-[520px] mb-[16px] pl-1.5">
            <div className=" flex gap-[38px]">
              <Link
                to={`/book/${id}`}
                className={`font-bold text-[32px] ${
                  isInfoPage ? "text-[var(--text)]" : "text-[#aaa]"
                }`}
              >
                Маълумотлар
              </Link>
              <Link
                to={`/book/${id}/comment`}
                className={`font-bold text-[32px] ${
                  isCommentPage ? "text-[var(--text)]" : "text-[#aaa]"
                }`}
              >
                Фикрлар
              </Link>
            </div>
            <h2 className="font-bold text-[32px] text-[var(--text)]">
              Ўхшаш китоблар
            </h2>
          </nav>
          <div className="flex gap-[24px] justify-between">
            <Outlet />
            <div className="w-[30%]">
              <ul>
                {BookData.slice(0, 3).map((item) => (
                  <li key={item.id}>
                    <Link
                      to={`/book/${item.id}`}
                      className="flex gap-[30px] text-start mb-[16px]"
                    >
                      <SmillerBooks
                        id={item.id}
                        imgs={item.imgs}
                        title={item.title}
                        description={item.description}
                        star_icon={item.star_icon}
                        reting={item.reting}
                        comments={item.comments}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
              <Link to="/">
                <Button variant={"smiller_btn"}>Кўпроқ</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
