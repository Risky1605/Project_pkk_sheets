const BoxOpsional = ({ column, row, setImage = false, image, imageStyle }) => {
  return (
    <div
      className={`${column ? column : "col-span-1"} ${
        row ? row : "row-span-1"
      } ${setImage ? "overflow-hidden rounded-md" : "box-image-experince "}  `}
    >
      {setImage && (
        <img
          src={image}
          className={`w-full h-full object-cover ${imageStyle}`}
        />
      )}
    </div>
  );
};

export default BoxOpsional;
