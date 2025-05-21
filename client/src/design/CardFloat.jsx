const CardFloat = ({
  width,
  position_koordinat,
  foto_height,
  image,
  transition = false,
}) => {
  return (
    <div
      className={`btn-card ${width} ${position_koordinat} absolute  flex flex-col justify-center`}
    >
      <div className={`w-full ${foto_height}  overflow-hidden rounded-sm`}>
        <img className="w-full h-full object-cover" src={image}></img>
      </div>

      {transition && (
        <>
          <div className="-inset-2 bg-gradient-to-t from-white to-transparent absolute z-10"></div>
          <div className="-inset-4 bg-gradient-to-t from-white to-transparent absolute z-10"></div>
        </>
      )}
    </div>
  );
};

export default CardFloat;
