const TestimonialComment = ({ username, date, message, imageurl }) => {
  return (
    <div className=" btn-card-experince p-[0.1rem] mb-4  relative overflow-hidden hover:scale-105 transition-all duration-500 h-full">
      <div className=" comment-box ">
        <div className="flex gap-1 items-center">
          <div className="rounded-full z-50 p-[1rem]">
            <img
              src={imageurl}
              height={60}
              width={60}
              className="rounded-full"
            ></img>
          </div>

          <div className="flex flex-col justify-center gap-1">
            <h1 className="text-lg">{username}</h1>
            <p className="text-xs text-slate-400">{date}</p>
          </div>
        </div>

        <div>
          <p className="ml-[0.5rem] mb-[0.5rem] max-w-[24rem] ">"{message}"</p>
        </div>
      </div>

      <div className="conic-custom animate-border-glowSpin"></div>
    </div>
  );
};

export default TestimonialComment;
