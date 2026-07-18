const ImageCard = ({ src, alt = "" }) => {
  return <img className="image-card" src={src} alt={alt} />;
};

export default ImageCard;
