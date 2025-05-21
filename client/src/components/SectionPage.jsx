const SectionPage = ({
  children,
  classname,
  id,
  setpaddingCustom = false,
  setTopSpace = false,
  padding,
  signSection,
  headingSection,
  descSection,
  buttonAdd,
}) => {
  return (
    <div
      className={`${classname} ${
        setpaddingCustom ? "px-[2rem] md:px-[8rem] xl:px-[10rem]" : padding
      }  ${setTopSpace ? "mt-40" : ""}  scroll-mt-40 mb-4 md:mb-20`}
      id={id}
    >
      <div className="flex flex-col justify-center gap-4 items-center text-center ">
        {/* a sign */}
        {signSection}

        {/* Hero title */}
        <h1 className="text-[3rem] md:text-[4rem] font-bold bg-gradient-to-r from-primary to-secondary/50 bg-clip-text text-transparent">
          {headingSection}
        </h1>

        {/* desc */}
        <p className="max-w-[60%]">{descSection}</p>

        {buttonAdd}
      </div>
      {children}
    </div>
  );
};

export default SectionPage;
