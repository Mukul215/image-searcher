import ImageCard from "./ImageCard";
import "./ImageList.css";

const ImageList = (props) => {
  console.log(props.images);
  return (
    <div className="image-list">
      {props.images.map((images) => {
        return <ImageCard key={images.id} images={images} />;
      })}
    </div>
  );
};

export default ImageList;
