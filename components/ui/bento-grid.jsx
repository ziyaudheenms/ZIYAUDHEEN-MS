import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children
}) => {
  return (
    (<div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className
      )}>
      {children}
    </div>)
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon
}) => {
  return (
    (<div
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-neutral-200 bg-black p-4 transition duration-200 hover: dark:border-white/[0.2] dark:bg-black dark:shadow-none",
        className
      )}>
      {header}
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        {icon}
        <div
          className="mt-2 font-bold text-[18px] font-sans bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-violet-800 dark:text-white">
          {title}
        </div>
        <div
          className="font-light text-[15px] text-[#888888] dark:text-neutral-300">
          {description}
        </div>
        
      </div>
    </div>)
  );
};
