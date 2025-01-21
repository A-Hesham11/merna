import { useState } from "react";
import "react-image-lightbox/style.css"; // Import the styles for the lightbox
import Lightbox from "react-image-lightbox";

const ImagePreview = ({ imageSrc, alt }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [imageSrc];

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
  };

  return (
    <div className="flex space-x-4">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Image ${index + 1}`}
          className="cursor-pointer w-32 h-32 object-cover rounded"
          onClick={() => openLightbox(index)}
        />
      ))}

      {isOpen && (
        <Lightbox
          mainSrc={images[currentImageIndex]}
          nextSrc={images[(currentImageIndex + 1) % images.length]}
          prevSrc={
            images[(currentImageIndex + images.length - 1) % images.length]
          }
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setCurrentImageIndex(
              (currentImageIndex + images.length - 1) % images.length
            )
          }
          onMoveNextRequest={() =>
            setCurrentImageIndex((currentImageIndex + 1) % images.length)
          }
        />
      )}
    </div>
  );
};

export default ImagePreview;
