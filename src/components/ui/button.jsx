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
        "flex py-[10px] px-[24px] rounded-[14px] font-bold",
        {
          " bg-[var(--primary)]  text-[19px] text-[var(--white)]  gap-[12px]":
            variant === "header",
          " mt-[80px] bg-[var(--white)] text-[var(--text)] text-[18px]   mx-auto items-center gap-[5px] ":
            variant === "hero",
        },
        className
      )}
    >
      <img src={leftIcon} alt="" />
      {children}
    </button>
  );
};
