import React, { useState } from "react";
import Gallery from "react-photo-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import photosData from "../PhotosData/PhotosData";

const ScoutTest = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const openLightbox = (index) => {
    console.log("Open Lightbox");
    if (lightboxOpen) {
      closeLightbox();
    }
    setLightboxOpen(true);
    setCurrentPhotoIndex(index);
  };

  const closeLightbox = () => {
    console.log("Closing Lightbox");
    setLightboxOpen(false);
  };

  const maxPhotosPerColumn = 4; // Maksymalna liczba zdjęć w kolumnie

  // Podział zdjęć na kolumny
  const dividedPhotos = [];
  for (let i = 0; i < photosData.length; i += maxPhotosPerColumn) {
    dividedPhotos.push(photosData.slice(i, i + maxPhotosPerColumn));
  }

  return (
    <div className="scouttest">
      <div className="scouttest__description">
        <h2>Scout Test</h2>
        <p className="scouttest__text">
          The website "scout test" is a project for one of the Polish marketing
          companies. In the project I used React.js and React Router to handle
          subpages. I also used the potential of hooks available from React
          16.8, e.g. useState, useEffects, useNavigate. The "scout test" website 
          is responsive (two breakpoints) and styled according to the "mobile first" 
          principle using the Sass preprocessor.
        </p>
      </div>
      <div className="scouttest__box">
        {dividedPhotos.map((column, columnIndex) => (
          <div key={columnIndex} className="scouttest__column">
            {column.map((photo, photoIndex) => (
              <div key={photoIndex} className="scouttest__photo">
                <Gallery
                  photos={[photo]}
                  onClick={(event, obj) =>
                    openLightbox(
                      columnIndex * maxPhotosPerColumn + photoIndex
                    )
                  }
                />
              </div>
            ))}
          </div>
        ))}
      </div>
      {lightboxOpen && (
        <Lightbox
          mainSrc={photosData[currentPhotoIndex].src}
          nextSrc={photosData[(currentPhotoIndex + 1) % photosData.length].src}
          prevSrc={
            photosData[
              (currentPhotoIndex + photosData.length - 1) % photosData.length
            ].src
          }
          onCloseRequest={closeLightbox}
          onMovePrevRequest={() =>
            setCurrentPhotoIndex(
              (currentPhotoIndex + photosData.length - 1) % photosData.length
            )
          }
          onMoveNextRequest={() =>
            setCurrentPhotoIndex((currentPhotoIndex + 1) % photosData.length)
          }
        />
      )}
    </div>
  );
};

export default ScoutTest;
