import React from "react";

const MasonryGallery = ({ images }) => {
  return (
    <div style={styles.masonry}>
      {images.map((e, index) => (
        <div key={index} style={styles.e}>
          <img
            src={e.image}
            alt=""
            style={styles.image}
          />
        </div>
      ))}
    </div>
  );
};

const styles = {
  masonry: {
    columnCount: 4,
    columnGap: "16px",
  },
  e: {
    marginBottom: "16px",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
    background: "#111",
  },
  image: {
    width: "100%",
    display: "block",
    borderRadius: "12px",
    transition: "transform 0.3s ease",
  },
};

export default MasonryGallery;
