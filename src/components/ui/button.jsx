import clsx from "clsx";

export const Button = ({
  children,
  type,
  leftIcon,
  rightIcon,
  variant,
  className,
  ...props
}) => {
  return (
    <button
      type={type}
      className={clsx(
        "",
        {
          "flex py-[10px] px-[24px] rounded-[14px] font-bold bg-[var(--primary)]  text-[19px] text-[var(--white)]  gap-[12px]":
            variant === "header",
          "flex py-[10px] px-[24px] rounded-[14px] font-bold mt-[80px] bg-[var(--white)] text-[var(--text)] text-[18px]   mx-auto items-center gap-[5px] ":
            variant === "hero",
          "px-[17px] py-[7px] flex bg-[var(--primary)] gap-[12px] rounded-[14px] text-[16px] font-medium text-[var(--white)] text-center":
            variant === "book_sold",
          " border border-[var(--primary)] px-[17px] py-[7px] flex bg-[transparent] gap-[12px] rounded-[14px] text-[16px] font-medium text-[var(--text)] text-center":
            variant === "book_audio" || variant === "book_audio",
          " mt-[9px] px-[146px] py-[13px]  bg-[var(--primary-soft)] rounded-[14px] text-[18px] font-bold text-[var(--primary)] text-center":
            variant === "smiller_btn",
          "py-[7px] px-[24px] rounded-[14px] bg-[var(--primary)] font-bold text-[18px] text-[var(--white)]":
            variant === "comment_btn",
        },
        className
      )}
      {...props}
    >
      <img src={leftIcon} alt="" />
      {children}
    </button>
  );
};
