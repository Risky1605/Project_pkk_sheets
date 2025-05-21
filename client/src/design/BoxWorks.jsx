const BoxWorks = ({ children, className, title, desc }) => {
  return (
    <div
      className={`btn-card-experince w-full md:w-1/3 md:max-w-[36rem] h-fit flex flex-col items-center gap-[0.5rem] ${className} text-center`}
    >
      {children}

      <h1 className="text-2xl mt-4">{title}</h1>
      <p className="max-w-[80%] mb-4">{desc}</p>
    </div>
  );
};

export default BoxWorks;
